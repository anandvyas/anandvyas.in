---
title: 'DockerCompose - Example (Prometheus & Grafana)'
date: 2024-02-01
draft:  true   
featured: false  
description: "Docker Compose example - Prometheus & Grafana"
thumbnail: "/posts/docker/images/docker.png"
featureImage: "/posts/docker/images/docker.png" 
shareImage: "/posts/docker/images/docker.png"
author: "Anand Vyas"
tags:
    - Docker compose
categories:     
    - Docker
---

- This Docker Compose file defines three services: prometheus, alertmanager and grafana.
- prometheus service uses the official Prometheus image (prom/prometheus) and exposes port 9090 for accessing the Prometheus UI.
- The configuration file for Prometheus is mounted from the local ./prometheus_data directory into the container's /etc/prometheus directory.
- The command specified for Prometheus tells it to use the configuration file at /etc/prometheus/prometheus.yml.
- grafana service uses the official Grafana image (grafana/grafana) and exposes port 3000 for accessing the Grafana UI.
- The volume is mounted to persist Grafana data in the local ./grafana_data directory.
- An environment variable GF_SECURITY_ADMIN_PASSWORD is set to specify the admin password for Grafana.
- grafana service depends on prometheus service, ensuring that Prometheus is started before Grafana.
- Both services have the restart: always option set to ensure that they are automatically restarted in case of failure or system reboot.

```yaml
version: '2.1'
networks:
  monitor-net:
    driver: bridge

volumes:
    prometheus_data: {}
    grafana_data: {}

services:
    prometheus:
        image: prom/prometheus
        container_name: prometheus
        volumes:
            - ./prometheus:/etc/prometheus
            - prometheus_data:/prometheus
        command:
            - '--config.file=/etc/prometheus/prometheus.yml'
            - '--storage.tsdb.path=/prometheus'
            - '--web.console.libraries=/etc/prometheus/console_libraries'
            - '--web.console.templates=/etc/prometheus/consoles'
            - '--storage.tsdb.retention.time=200h'
            - '--web.enable-lifecycle'
        restart: unless-stopped
        expose:
            - 9090
        networks:
            - monitor-net
        labels:
            org.label-schema.group: "monitoring"


    alertmanager:
        image: prom/alertmanager
        container_name: alertmanager
        volumes:
            - ./alertmanager:/etc/alertmanager
        command:
            - '--config.file=/etc/alertmanager/config.yml'
            - '--storage.path=/alertmanager'
        restart: unless-stopped
        expose:
            - 9093
        networks:
            - monitor-net
        labels:
            org.label-schema.group: "monitoring"


    grafana:
        image: grafana/grafana
        container_name: grafana
        volumes:
            - grafana_data:/var/lib/grafana
            - ./grafana/provisioning/dashboards:/etc/grafana/provisioning/dashboards
            - ./grafana/provisioning/datasources:/etc/grafana/provisioning/datasources
        environment:
            - GF_SECURITY_ADMIN_USER=${ADMIN_USER:-admin}
            - GF_SECURITY_ADMIN_PASSWORD=${ADMIN_PASSWORD:-admin}
            - GF_USERS_ALLOW_SIGN_UP=false
        restart: unless-stopped
        depends: prometheus
        expose:
            - 3000
        networks:
            - monitor-net   
        labels:
            org.label-schema.group: "monitoring"
```