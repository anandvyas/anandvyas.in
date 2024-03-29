---
title: 'SFTP server'
date: 2024-02-01
draft:  true   
featured: true  
description: "Docker - Compose"
thumbnail: "/posts/docker/images/sftp.png"
featureImage: "/posts/docker/images/sftp.png" 
shareImage: "/posts/docker/images/sftp.png"
author: "Anand Vyas"
tags:
    - Docker
    - Docker compose
categories:     
    - Docker
---

> https://github.com/drakkan/sftpgo


### Docker-compose file
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
```

### Kubernetes Deployments 
