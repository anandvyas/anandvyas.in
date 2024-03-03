---
title: 'Docker - Dockerfile'
date: 2024-02-01
draft:  true   
featured: false  
description: "Docker - Dockerfile"
thumbnail: "/posts/docker/images/docker.png"
featureImage: "/posts/docker/images/docker.png" 
shareImage: "/posts/docker/images/docker.png"
author: "Anand Vyas"
tags:
    - Docker
    - Dockerfile
categories:     
    - Docker
---

A Dockerfile is a text document used to create own docker container. A Dockerfile has some commands

- FROM: Sets the Base Image for subsequent instructions.
- MAINTAINER: (deprecated - use LABEL instead) Set the Author field of the generated images.
- RUN: execute any commands in a new layer on top of the current image and commit the results.
- CMD: provide defaults for an executing container.
- EXPOSE: informs Docker that the container listens on the specified network ports at runtime. NOTE: does not actually make ports accessible.
- ENV: sets environment variable.
- ADD: copies new files, directories or remote file to container. Invalidates caches. Avoid ADD and use COPY instead.
- COPY: copies new files or directories to container. Note that this only copies as root, so you have to chown manually regardless of your USER / WORKDIR setting, as same as ADD.
- ENTRYPOINT: configures a container that will run as an executable.
- VOLUME: creates a mount point for externally mounted volumes or other containers.
- USER: sets the user name for following RUN / CMD / ENTRYPOINT commands.
- WORKDIR: sets the working directory.
- ARG: defines a build-time variable.
- ONBUILD: adds a trigger instruction when the image is used as the base for another build.
- STOPSIGNAL: sets the system call signal that will be sent to the container to exit.
- LABEL: apply key/value metadata to your images, containers, or daemons.
- HEALTHCHECK: a health check is a command used to determine the health of a running container.

### Dockerfile examples 

#### Apache Server
```docker
FROM ubuntu:12.04
MAINTAINER Anand Vyas version: 0.1

RUN apt-get update && apt-get install -y apache2 && apt-get clean && rm -rf /var/lib/apt/lists/*

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]
```

#### Ghost
```docker
FROM komljen/nodejs
MAINTAINER Anand Vyas <anandvyas@live.com>

ENV GHOST_VERSION 0.5.7
ENV APP_ROOT /data/app

RUN \
  curl -sLO http://ghost.org/archives/ghost-${GHOST_VERSION}.zip && \
  mkdir -p ${APP_ROOT} && \
  unzip -uo ghost-${GHOST_VERSION}.zip -d ${APP_ROOT} && \
  rm ghost-${GHOST_VERSION}.zip

RUN \
  cd ${APP_ROOT} && \
  npm install --production

COPY start.sh start.sh

VOLUME ["$APP_ROOT"]

RUN rm /usr/sbin/policy-rc.d
CMD ["/start.sh"]

EXPOSE 2368
```

