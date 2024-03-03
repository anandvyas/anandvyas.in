---
title: 'Linux - Find Command'
date: 2024-02-01
draft:  false   
featured: false  
description: "Linux - Find Commands"
thumbnail: "/posts/linux/images/linux-command.png"
featureImage: "/posts/linux/images/linux-command.png" 
shareImage: "/posts/linux/images/linux-command.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---


### basic 'find file' commands
```bash
find / -name foo.txt -type f -print             # full command
find / -name foo.txt -type f                    # -print isn't necessary
find / -name foo.txt                            # don't have to specify "type==file"
find . -name foo.txt                            # search under the current dir
find . -name "foo.*"                            # wildcard
find . -name "*.txt"                            # wildcard
find /users/al -name Cookbook -type d           # search '/users/al'
```

### search multiple dirs
```bash
find /opt /usr /var -name foo.scala -type f     # search multiple dirs
```

### case-insensitive searching
```bash
find . -iname foo                               # find foo, Foo, FOo, FOO, etc.
find . -iname foo -type d                       # same thing, but only dirs
find . -iname foo -type f                       # same thing, but only files
```

### find files with different extensions
```bash
find . -type f \( -name "*.c" -o -name "*.sh" \)                       # *.c and *.sh files
find . -type f \( -name "*cache" -o -name "*xml" -o -name "*html" \)   # three patterns
```

### find files that don't match a pattern (-not)
```bash
find . -type f -not -name "*.html"  # find all files not ending in ".html"
```

### find files by text in the file (find + grep)
```bash
find . -type f -name "*.java" -exec grep -l StringBuffer {} \; # find StringBuffer in all *.java files
find . -type f -name "*.java" -exec grep -il string {} \;      # ignore case with -i option
find . -type f -name "*.gz" -exec zgrep 'GET /foo' {} \;       # search for a string in gzip'd files
```

### 5 lines before, 10 lines after grep matches
```bash
find . -type f -name "*.scala" -exec grep -B5 -A10 'null' {} \;
```

### find files and act on them (find + exec)
```bash
find /usr/local -name "*.html" -type f -exec chmod 644 {} \;      # change html files to mode 644
find htdocs cgi-bin -name "*.cgi" -type f -exec chmod 755 {} \;   # change cgi files to mode 755
find . -name "*.pl" -exec ls -ld {} \;                            # run ls command on files found
```

### find and copy
```bash
find . -type f -name "*.mp3" -exec cp {} /tmp/MusicFiles \;  # cp *.mp3 files to /tmp/MusicFiles
```

### copy one file to many dirs
```bash
find dir1 dir2 dir3 dir4 -type d -exec cp header.shtml {} \;  # copy the file header.shtml to those dirs
```

### find and delete
```bash
find . -type f -name "Foo*" -exec rm {} \;  # remove all "Foo*" files under current dir
find . -type d -name CVS -exec rm -r {} \;  # remove all subdirectories named "CVS" under current dir
```

### find files by file permission
```bash
find . -type f -perm 0777 -print
find / -type f ! -perm 777
```

### find files by modification time
```bash
find / -mtime 1  # Find Last 24 hours Modified Files	
find / -mtime 50 # Find Last 50 Days Modified Files	
find / -atime 50 # Find Last 50 Days Accessed Files	
find / -mtime +50 –mtime -100 # Find Last 50-100 Days Modified Files	
find / -cmin -60 # Find Changed Files in Last 1 Hour	
find / -mmin -60 # Find Modified Files in Last 1 Hour	
find / -mtime -50 -type f  # Find Last 50 Days Modified Files only
find / -mtime -7 -type d   # Find Last 50 Days Modified Dir only
```

### find files by file size
```bash
find / -size 50M # Find 50MB Files	
find / -size +50M -size -100M # Find Size between 50MB – 100MB
find / -type f -name *.mp3 -size +10M -exec rm {} \; # Find Specific Files and Delete	
```

### find files by modification time using a temp file
```bash
touch 09301330 poop           # 1) create a temp file with a specific timestamp
find . -mnewer poop           # 2) returns a list of new files
rm poop                       # 3) rm the temp file
```

### find with time: this works on mac os x
```bash
find / -newerct '1 minute ago' -print
```

### find and tar
```bash
find . -type f -name "*.java" | xargs tar cvf myfile.tar
find . -type f -name "*.java" | xargs tar rvf myfile.tar
```

### find, tar, and xargs
```bash
find . -name -type f '*.mp3' -mtime -180 -print0 | xargs -0 tar rvf music.tar
```
> `-print0 helps handle spaces in filenames`    

### find and pax (instead of xargs and tar)
```bash
find . -type f -name "*html" | xargs tar cvf jw-htmlfiles.tar -
find . -type f -name "*html" | pax -w -f jw-htmlfiles.tar
```

### locate command
```bash
locate tomcat.sh          # search the entire filesystem for 'tomcat.sh' (uses the locate database)
locate -i spring.jar      # case-insensitive search
```