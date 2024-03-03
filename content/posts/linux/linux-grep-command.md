---
title: 'Linux - Grep Command'
date: 2024-02-01
draft:  false   
featured: false  
description: "Linux - grep Commands"
thumbnail: "/posts/linux/images/linux-command.png"
featureImage: "/posts/linux/images/linux-command.png" 
shareImage: "/posts/linux/images/linux-command.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---

Options | Description |
--- | --- |
| -c |  This prints only a count of the lines that match a pattern |
| -h | Display the matched lines, but do not display the filenames.|
| -i | Ignores, case for matching|
| -l | Displays list of a filenames only.|
| -n | Display the matched lines and their line numbers.|
| -v | This prints out all the lines that do not matches the pattern|
| -e exp | Specifies expression with this option. Can use multiple times.|
| -f file | Takes patterns from file, one per line.|
| -E | Treats pattern as an extended regular expression (ERE)|
| -w | Match whole word|
| -o | Print only the matched parts of a matching line, with each such part on a separate output line.|
| -A n | Prints searched line and nlines after the result.|
| -B n | Prints searched line and n line before the result.|
| -C n | Prints searched line and n lines after before the result.|


```bash
grep -i "UNix" anand.txt 
grep -c "unix" anand.txt
grep -l "unix" *
# Regular expression pattern
grep "^unix" anand.txt
grep "os$" geekfile.txt
```
- grep -r pattern dir – search recursively for pattern in dir