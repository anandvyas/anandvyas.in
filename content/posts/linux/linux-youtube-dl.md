---
title: 'Youtube-DL'
date: 2024-02-01
draft:  true   
featured: false  
description: "Youtube-DL"
thumbnail: "/posts/linux/images/youtube-dl.png"
featureImage: "/posts/linux/images/youtube-dl.png" 
shareImage: "/posts/linux/images/youtube-dl.png"
author: "Anand Vyas"
tags:
    - Linux tools
categories:     
    - Linux
---

### Examples

```bash
# To download a video in 720p MP4:
youtube-dl -f 22 example.com/watch?v=id

# To download a video in 720p MP4 or WebM or FLV:
youtube-dl -f 22/45/120

# To list all available formats of a video:
youtube-dl -F example.com/watch?v=id

# To download a video to /$uploader/$date/$title.$ext:
youtube-dl -o '%(uploader)s/%(date)s/%(title)s.%(ext)s' example.com/watch?v=id

# To download a video playlist starting from a certain video:
youtube-dl --playlist-start 5 example.com/watch?v=id&list=listid

# To simulate a download with youtube-dl:
youtube-dl -s example.com/watch?v=id

# To download audio in mp3 format with best quality available
youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 example.com/watch?v=id

# For all video formats see link below (unfold "Comparison of YouTube media encoding options")
# https://en.wikipedia.org/w/index.php?title=YouTube&oldid=723160791#Quality_and_formats
```