---
title: 'Linux - SED Command'
date: 2024-02-01
draft:  true   
featured: false  
description: "Linux - SED Commands"
thumbnail: "/posts/linux/images/linux-command.png"
featureImage: "/posts/linux/images/linux-command.png" 
shareImage: "/posts/linux/images/linux-command.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---

SED command in UNIX stands for stream editor and it can perform lots of functions on file like searching, find and replace, insertion or deletion.

> sed OPTIONS... [SCRIPT] [INPUTFILE...] 

# Examples

testing file 

```bash
cat testing.txt

#output
unix is great os. unix is opensource. unix is free os.
learn operating system.
unix linux which one you choose.
unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.

# Replacing or substituting string (only first occurance of line)
sed 's/unix/linux/' geekfile.txt
```
#### output
`linux` is great os. unix is opensource. unix is free os.
learn operating system.
`linux` linux which one you choose.
`linux` is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.
 