---
title: 'Linux - Cheat Sheet'
date: 2024-02-01
draft:  false   
featured: false  
description: "Linux - Commands"
thumbnail: "/posts/linux/images/linux.png"
featureImage: "/posts/linux/images/linux.png" 
shareImage: "/posts/linux/images/linux.png"
author: "Anand Vyas"
keywords: "Linux-Commands Cheatsheet"
tags:
    - Cheat Sheet
    - Linux Commands
categories:     
    - Linux
---

### User management
- `useradd [USERNAME]` - Add new user
- `useradd -G [GROUPNAME][username]`-	Add new user in group
- `passwd [USERNAME]`	- User account is locked until you set a password with the passwd command
- `usermod -a -G [GROUPNAME][username]`	- Add user in group
- `userdel [USERNAME]`	- Remove the existing user
- `cat /etc/passwd | sort`	- View username and group information
- `cat /etc/group | sort`	- View linux group
- `usermod -d -m [NEW_DIRECTORY][username]`	- Change the user home directory location
- `usermod -u [UID][username]`	- Change the user UID

### File Commands

- `ls` – directory listing
- `ls -al` – formatted listing with hidden files
- `cd <dir>` - change directory to dir
- `cd` – change to home
- `pwd` – show current directory
- `mkdir <dir>` – create a directory dir
- `rm <file>` – delete file
- `rm -r <dir>` – delete directory dir
- `rm -f <file>` – force remove file
- `rm -rf <dir>` – force remove directory dir *
- `cp <file1> <file2>` – copy file1 to file2
- `cp -r <dir1> <dir2>` – copy dir1 to dir2; create dir2 if it doesn't exist
- `mv <file1> <file2>` – rename or move file1 to file2 if file2 is an existing directory, moves file1 into directory file2
- `ln -s <file link>` – create symbolic link link to file
- `touch <file>` – create or update file
- `cat > <file>` – places standard input into file
- `more <file>` – output the contents of file
- `head <file>` – output the first 10 lines of file
- `tail <file>` – output the last 10 lines of file
- `tail -f <file>` – output the contents of file as it grows, starting with the last 10 lines

### Process Management

- `ps` – display your currently active processes
- `top` – display all running processes
- `kill <pid>` – kill process id pid
- `killall <proc>` – kill all processes named proc *
- `bg` – lists stopped or background jobs; resume a stopped job in the background
- `fg` – brings the most recent job to foreground
- `fg <n>` – brings job n to the foreground

### File Permissions
#### Roles
- `u` - user (owner of the file)
- `g` - group (members of file's group)
- `o` - global (all users who are not owner and not part of group)
- `a` - all (all 3 roles above)

#### Numeric representations
- `7` - full (rwx)
- `6` - read and write (rw-)
- `5` - read and execute (r-x)
- `4` - read only (r--)
- `3` - write and execute (-wx)
- `2` - write only (-w-)
- `1` - execute only (--x)
- `0` - none (---)

```bash
# Add execute for all (myscript.sh)
chmod a+x myscript.sh

# Set user to read/write/execute, group/global to read only (myscript.sh), symbolic mode
chmod u=rwx, go=r myscript.sh 

# Remove write from user/group/global (myscript.sh), symbolic mode
chmod a-w myscript.sh

# Remove read/write/execute from user/group/global (myscript.sh), symbolic mode
chmod = myscript.sh

# Set user to read/write and group/global read (myscript.sh), octal notation
chmod 644 myscript.sh

# Set user to read/write/execute and group/global read/execute (myscript.sh), octal notation
chmod 755 myscript.sh

# Set user/group/global to read/write (myscript.sh), octal notation
chmod 666 myscript.sh
```

### SSH

- `ssh <user@host>` – connect to host as user
- `ssh -p port <user@host>` – connect to host on port port as user
- `ssh-copy-id <user@host>` – add your key to host for user to enable a keyed or passwordless login

### Searching (grep, find)

- [grep]({{< ref "/posts/linux/linux-grep-command.md" >}} "Linux - grep command") [options] pattern files – search for pattern in files
- command | grep pattern – search for pattern in the output of command
- locate file – find all instances of file
- [find]({{< ref "/posts/linux/linux-find-command.md" >}} "Linux - find command") [path] [options] [expression]


### System Info

- `date` – show the current date and time
- `cal` – show this month's calendar
- `uptime` – show current uptime
- `w` – display who is online
- `whoami` – who you are logged in as
- `finger <user>` – display information about user
- `uname -a` – show kernel information
- `cat /proc/cpuinfo` – cpu information
- `cat /proc/meminfo` – memory information
- `man <command>` – show the manual for command
- `df` – show disk usage
- `du` – show directory space usage
- `free` – show memory and swap usage
- `whereis <app>` – show possible locations of app
- `which <app>` – show which app will be run by default

### Compression

- `tar cf <file.tar> <files>` – create a tar named file.tar containing files
- `tar xf <file.tar>` – extract the files from file.tar
- `tar czf <file.tar.gz> files` – create a tar with Gzip compression
- `tar xzf <file.tar.gz>` – extract a tar using Gzip
- `tar cjf <file.tar.bz2>` – create a tar with Bzip2 compression
- `tar xjf <file.tar.bz2>` – extract a tar using Bzip2
- `gzip <file>` – compresses file and renames it to file.gz
- `gzip -d <file.gz>` – decompresses file.gz back to file

### Network

- `ping host` – ping host and output results
- `whois domain` – get whois information for domain
- `dig domain` – get DNS information for domain
- `dig -x host` – reverse lookup host
- `wget file` – download file
- `wget -c file` – continue a stopped download

### Installation

- `dpkg -i pkg.deb` – install a package (Debian)
- `rpm -Uvh pkg.rpm` – install a package (RPM)

### Install from source

- ./configure
- make
- make install

### Shortcuts

- `Ctrl+C` – halts the current command
- `Ctrl+Z` – stops the current command, resume with
- `fg` in the foreground or bg in the background
- `Ctrl+D` – log out of current session, similar to exit
- `Ctrl+W` – erases one word in the current line
- `Ctrl+U` – erases the whole line
- `Ctrl+R` – type to bring up a recent command
- `!!` - repeats the last command
- `exit` – log out of current session