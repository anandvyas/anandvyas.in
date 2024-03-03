---
title: 'Shell script - Take MySQL backup and push to aws s3'
date: 2024-02-01
draft:  false   
featured: false  
description: "Linux - Shell Script"
thumbnail: "/posts/linux/images/shell-script.png"
featureImage: "/posts/linux/images/shell-script.png" 
shareImage: "/posts/linux/images/shell-script.png"
author: "Anand Vyas"
tags:
    - Example
    - Shell Script
categories:
    - Linux
---

Provided below is an example script designed to dynamically back up a MySQL database hosted within a Docker environment. The backup is subsequently pushed to an AWS S3 bucket.

Feel free to utilize this script for your database backup requirements.

### MySQL Backup and Push to S3 Bucket

```bash
#!/bin/bash

S3_bucketName=my-database-backup
DB_Username=root
DB_Password=pass
DB_Name=testing
mysqlIpAddress=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' mysql-idp-server)
filename='my-server-' + $(date +%Y-%m-%d-%H.%M.%S)

mysqldump  -h $mysqlIpAddress -u$DB_Username -p$DB_Password $DB_Name > $filename.sql

#Create bucket 
aws s3 mb s3://$S3_bucketName
aws s3 cp $filename.sql s3://$S3_bucketName/
rm -rf $filename.sql
```