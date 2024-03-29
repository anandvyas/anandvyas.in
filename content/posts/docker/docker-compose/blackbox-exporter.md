---
title: 'Website uptime monitoring - Blackbox exporter + prometheus + Grafana'
date: 2024-02-01
draft:  true   
featured: false  
description: "Website uptime monitoring - Blackbox exporter + prometheus + Grafana"
thumbnail: "/posts/docker/images/docker.png"
featureImage: "/posts/docker/images/docker.png" 
shareImage: "/posts/docker/images/docker.png"
author: "Anand Vyas"
tags:
    - Docker compose
categories:     
    - Docker
---

URL's C:\Users\ANGEL\webroot\exp\website-monitoring\config\prometheus\rules

### Target Websites
```yaml
- targets:
  - https://7up.co.uk
  - https://7up.de
  - https://7upfree.ie
  - https://alvalle.fr
  - https://cheetos.com.tr
  - https://cheetos.nl
```

### Docker-compose Yaml
```yaml
version: '3'
services:
  prometheus:
    image: "prom/prometheus:latest"
    hostname: "prometheus"
    restart: always
    networks:
    - website_monitoring
    ports:
    - "127.0.0.1:9090:9090"
    user: nobody
    volumes:
    - "./config/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro"
    - "./config/prometheus/targets.yml:/etc/prometheus/targets.yml:ro"
    - "./config/prometheus/rules:/etc/prometheus/rules"
    - "prometheus_data:/prometheus"
    command:
    - "--config.file=/etc/prometheus/prometheus.yml"
    - "--storage.tsdb.path=/prometheus"
    - "--storage.tsdb.retention.time=30d"
    - '--web.console.libraries=/usr/share/prometheus/console_libraries'
    - '--web.console.templates=/usr/share/prometheus/consoles'
    - '--web.enable-admin-api'

  blackbox-exporter:
    image: "prom/blackbox-exporter:latest"
    hostname: "blackbox"
    restart: always
    networks:
    - website_monitoring
    ports:
    - "127.0.0.1:9115:9115"
    volumes:
    - "./config/blackbox-exporter/blackbox-exporter.yml:/etc/prometheus/blackbox-exporter.yml"
    command:
    - "--config.file=/etc/prometheus/blackbox-exporter.yml"

  # pagespeed-exporter:
  #   image: "foomo/pagespeed_exporter:latest"
  #   hostname: "pagespeed"
  #   restart: always
  #   networks:
  #   - website_monitoring
  #   ports:
  #   - "127.0.0.1:9271:9271"
  #   environment: 
  #   - PAGESPEED_API_KEY=AIzaSyCP2X9eO-9VY3rs5lxZwZgth03gtgUg4ZU

  grafana:
    image: "grafana/grafana:7.2.0"
    hostname: "grafana"
    restart: always
    networks:
    - website_monitoring
    ports:
    - "127.0.0.1:3000:3000"
    environment:
    - "GF_SECURITY_ADMIN_PASSWORD=CHANGEME"
    - "GF_AUTH_ANONYMOUS_ENABLED=true"
    volumes:
    - "./config/grafana/provisioning:/etc/grafana/provisioning"
    

volumes:
  prometheus_data:

networks:
  website_monitoring:

```