---
title: 'Linux - Curl Command'
date: 2024-02-01
draft:  true   
featured: false  
description: "Linux - Curl Commands"
thumbnail: "/posts/linux/images/curl.png"
featureImage: "/posts/linux/images/curl.png" 
shareImage: "/posts/linux/images/curl.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---

Command-line tool for transferring data with URL syntax

> curl [option] url

### Examples
```bash
# Show content of the URL on stdout.
curl http://anandvyas.in

# Download a file and specify a new filename.
curl http://anandvyas.in/file.zip -o new_file.zip
curl http://anandvyas.in/file.zip --output new_file.zip

# Download a file with same name.
curl -O http://anandvyas.in/file.zip 
curl --remote-name http://anandvyas.in/file.zip 


# Download multiple files.
curl -O <URLOfFirstFile> -O <URLOfSecondFile>

# Download all sequentially-numbered files (1-24).
curl http://anandvyas.in/pic[1-24].jpg

# Download a file and follow redirects.
curl -L http://anandvyas.in/file

# Download a file and pass HTTP Authentication.
curl -u username:password <URL>
curl --user myusername:mypassword http://anandvyas.in

# Download a file with a Proxy.
curl -x proxysever.server.com:PORT http://addressiwantto.access

# Download a file from FTP.
curl -u username:password -O ftp://anandvyas.in/pub/file.zip


# Get an FTP directory listing.
curl ftp://username:password@anandvyas.in

# Resume a previously failed download.
curl -C - -o partial_file.zip http://anandvyas.in/file.zip

# Fetch only the HTTP headers from a response.
curl -I http://anandvyas.in
curl --head http://anandvyas.in

# Fetch your external IP and network info as JSON.
curl http://ifconfig.me/all/json

# Limit the rate of a download.
curl --limit-rate 1000B -O http://path.to.the/file

# POST to a form.
curl -F "name=user" -F "password=test" http://anandvyas.in

# POST JSON Data.
curl -H "Content-Type: application/json" -X POST -d '{"user":"bob","pass":"123"}' http://anandvyas.in

# POST data from the standard in / share data on sprunge.us.
curl -F 'sprunge=<-' sprunge.us


# To fetch only the HTTP headers from a response:
curl -I <url>

# To get only the HTTP status code:
curl -o /dev/null -w '%{http_code}\n' -s -I URL

# Download a file, saving the output under the filename indicated by the URL:
curl --remote-name http://anandvyas.in/filename

# Download a file, following location redirects, and automatically continuing (resuming) a previous file transfer and return an error on server error:
curl --fail --remote-name --location --continue-at - http://anandvyas.in/filename

# Send form-encoded data (POST request of type `application/x-www-form-urlencoded`). Use `--data @file_name` or `--data @'-'` to read from STDIN:
curl --data 'name=bob' http://anandvyas.in/form

# Send a request with an extra header, using a custom HTTP method:
curl --header 'X-My-Header: 123' --request PUT http://anandvyas.in

# Send data in JSON format, specifying the appropriate content-type header:
curl --data '{"name":"bob"}' --header 'Content-Type: application/json' http://anandvyas.in/users/1234

# Pass client certificate and key for a resource, skipping certificate validation:
curl --cert client.pem --key key.pem --insecure https://anandvyas.in

# Download all PNG files from a site
```bash
curl https://anandvyas.in | grep --only-matching 'src="[^"]*.[png]"' | \
cut -d\" -f2 | \
while read i; do curl https://anandvyas.in/"${i}" -o "${i##*/}"; done
```