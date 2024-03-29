---
title: 'Homelab'
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
    - Monitoring
    - Docker
categories:     
    - Docker
---

```yaml
version: '3'

volumes:
  mysql_data:
      driver: local
  grafana_data:
  portainer:
  bind9:
  traefik: 
  uptime:
  filebrowser:
  prometheus_data:

services:
  dashboard:
    container_name: home
    image: daledavies/jump:v1.3.1
    # restart: unless-stopped
    volumes:
      - ./data/dashboard/backgrounds:/backgrounds
      - ./data/dashboard/favicon:/favicon
      - ./data/dashboard/search:/search
      - ./data/dashboard/sites:/sites
      # - ./data/dashboard/nginx:/etc/nginx
    ports:
      - 8123:8080
    environment:
      - SITENAME=Sweet Family
      # - OWMAPIKEY='0a1b2c3d4e5f6a7b8c9d0a1b'
      # - LATLONG='51.509865,-0.118092'
    networks:
      - web
      - internal
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(`home.com`)"

  # mariadb:
  #     image: mariadb:10.3
  #     restart: always
  #     ports:
  #     - 3306:3306
  #     volumes:
  #       - ./data/mysql_data:/var/lib/mysql:rw
  #       - ./data/sql/:/docker-entrypoint-initdb.d/:ro
  #     environment:
  #       MYSQL_ROOT_PASSWORD: t4r23H6cv62B
  #     healthcheck:
  #       test: ["CMD", "mysqladmin", "ping", "--silent"]
  #     networks:
  #       - web
  #       - internal

  # phpmyadmin:
  #   image: phpmyadmin/phpmyadmin:latest
  #   restart: always
  #   ports:
  #     - 8090:80
  #   environment:  
  #     - PMA_ARBITRARY=1
  #     - PMA_HOST=mariadb
  #     - PMA_PORT=3306
  #     - PMA_USER=root
  #     - PMA_PASSWORD=t4r23H6cv62B 
  #   depends_on:
  #     - mariadb
  #   links:
  #     - mariadb
  #   networks:
  #       - web
  #       - internal


  proxy:
    image: "traefik:v3.0"
    container_name: "traefik-web"
    restart: unless-stopped 
    command:
      # api
      - --api.insecure=true
      - --api.dashboard=true
      - --api.debug=true
      # general logs 
      - --log.level=DEBUG
      # providers
      - --providers.docker=true 
      # - --providers.docker.network=web
      - --providers.docker.exposedbydefault=false
      # set entrypoint
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
    ports:  
      - 80:80     
      - 443:443 
      - 8080:8080
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - web
      - internal

  # proxy:
  #     image: jc21/nginx-proxy-manager:2.10.3
  #     restart: unless-stopped
  #     environment:
  #       DB_MYSQL_HOST: mariadb
  #       DB_MYSQL_PORT: 3306
  #       DB_MYSQL_NAME: proxy
  #       DB_MYSQL_USER: proxy
  #       DB_MYSQL_PASSWORD: kICq3y286Dvw
  #     ports:
  #       - 80:80
  #       - 81:81 
  #       - 443:443
  #     depends_on:
  #       - mariadb
  #       - filebrowser
  #       - phpmyadmin
  #     networks:
  #       - web
  #       - internal

  # portainer:
  #   image: portainer/portainer-ce:2.19.2
  #   ports:
  #     - 9443:9443
  #   volumes:    
  #     - ./data/portainer:/data
  #     - /var/run/docker.sock:/var/run/docker.sock
  #   restart: unless-stopped
  
  filebrowser:
    image: filebrowser/filebrowser:v2.26.0
    container_name: file-browser
    ports:    
      - 8081:80
    volumes:
      - ./data/filebrowser/files/:/srv
      - ./data/filebrowser/filebrowser.db:/database.db
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
    depends_on:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.filebrowser.rule=Host(`files.home.com`)"
    networks:
        - web
        - internal

networks:
  web:
    external: true
  internal:
    external: false
```