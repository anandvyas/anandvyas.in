---
title: 'Apache - .htaccess'
date: 2024-02-01
draft:  true   
featured: false  
description: "Apache - .htaccess"
thumbnail: "/posts/apache/images/apache.png"
featureImage: "/posts/apache/images/apache.png" 
shareImage: "/posts/apache/images/apache.png"
author: "Anand Vyas"
tags:
    - Apache
    - .htaccess
categories:     
    - Apache
---

Htaccess (HyperText Access) is a configuration file that allows developers to overide the Apache webserver configuration at directory level.

### Enable .htaccess
By default .htaccess is not enable, we have to change in httpd.conf (Apache) configuration file to for enable .htaccess

> Replace AllowOverride None to AllowOverride All

Example:
```apache
<Directory /var/www/html/example.com/public_html>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

### Common Uses of .htaccess
- Mod_Rewrite
- Authentication
- Custom Error Pages
- Mime Types
- SSI (Server Side Includes)

### Mod_Rewrite
Mod_rewrite module is use for rule-based rewrite engine, based on Perl Compatible Regular Expressions. All the URL rewrite commands follow the below pattern

> RewriteRule Pattern Substitution [OptionalFlags]

Example:
```apache
RewriteRule ^products/([A-Za-z0-9-]+)/?$ results.php?products=$1 [NC]
```

### Some useful Snippets
### Disable or Enable Directory browsing
```apache 
# disable directory browsing
Options All -Indexes
# enable directory browsing
Options All +Indexes
```

### Change index file
```apache
DirectoryIndex index.html index.cgi index.php
```

### Remove www in Your URL
```apache
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^www.anandvyas.in [NC]
RewriteRule ^(.*)$ http://anandvyas.in/$1 [L,R=301]
```

### Redirect Browser to https
```apache
RewriteEngine On
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

### Force “File Save As” means to have force user to download file, not see in the browser
```apache
AddType application/octet-stream .avi .mpg .mov .pdf .xls .mp4
```

### Redirect mobile and tablets on different folders
```apache
RewriteCond %{HTTP_USER_AGENT} ^.*iPad.*$
RewriteRule ^(.*)$ http://anandvyas.in/folderfortablets [R=301]
RewriteCond %{HTTP_USER_AGENT} ^.*Android.*$
RewriteRule ^(.*)$ http://anandvyas.in/folderfortablets [R=301]
```

### 301 Permanent Redirects
```apache
Redirect 301 /olddirectory/file.html http://www.anandvyas.in/newdirectory/file.html
```

### Browser Cache
```apache
# 1 WEEK 1 DAY
<filesMatch “.(jpg|jpeg|png|gif|swf|ico)$”>
    Header set Cache-Control “max-age=691200, public”
</filesMatch>

<filesMatch “.(xml|txt|js)$”>
    Header set Cache-Control “max-age=691200, proxy-revalidate”
</filesMatch>

<filesMatch “.(html|htm|css|php)$”>
    Header set Cache-Control “max-age=691200, private, proxy-revalidate”
</filesMatch>
```

Gzip Compression
```apache
# compress text, HTML, JavaScript, CSS, and XML
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript
```

### Browser specific Compression
```apache
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
```
