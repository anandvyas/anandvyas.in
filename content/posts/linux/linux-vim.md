---
title: 'Linux - Vi Editor'
date: 2024-09-05
draft:  false   
featured: false  
description: "Linux - Vi Editor"
thumbnail: "/posts/linux/images/vim.png"
featureImage: "/posts/linux/images/vim.png" 
shareImage: "/posts/linux/images/vim.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---

Vi is a text editor originally created for Unix-based systems and is widely used in Linux environments. It is a powerful, lightweight, and versatile editor that operates directly within a terminal window. Vi is known for its efficiency and keyboard-based editing commands, making it popular among system administrators, developers, and power users.

**Here are some key commands of VI**

### Basic Navigation
- `h` : Move left
- `j` : Move down
- `k` : Move up
- `l` : Move right
- `0` : Move to the beginning of the line
- `$` : Move to the end of the line
- `w` : Move to the next word
- `b` : Move to the previous word
- `G` : Go to the last line of the file
- `gg` : Go to the first line of the file
- `:n` : Go to line n

### Modes
- `i` : Insert mode (enter text)
- `Esc` : Exit insert mode (return to normal mode)
- `v` : Visual mode (select text)
- `V` : Visual line mode (select whole lines)
- `Ctrl + v` : Visual block mode (select a block of text)

### Editing
- `x` : Delete character under cursor
- `dd` : Delete the current line
- `dw` : Delete the word
- `d$` : Delete from cursor to the end of the line
- `d0` : Delete from cursor to the beginning of the line
- `yy` : Copy (yank) the current line
- `p` : Paste after cursor
- `P` : Paste before cursor
- `u` : Undo last change
- `Ctrl + r` : Redo last undone change
- `cw` : Change (replace) word
- `r` : Replace a single character

### Search
- `/text` : Search for text
- `n` : Jump to the next occurrence of the search term
- `N` : Jump to the previous occurrence of the search term
- `?text` : Search backward for text

### Saving and Exiting
- `:w` : Save the file
- `:q` : Quit
- `:wq` : Save and quit
- `:q!` : Quit without saving
- `ZZ` : Save and quit (shortcut)

### Working with Multiple Files
- `:e filename` : Open a new file in the same window
- `:bnext or :bn` : Go to the next buffer
- `:bprev or :bp` : Go to the previous buffer
- `:sp filename` : Open a file in a new horizontal split
- `:vs filename` : Open a file in a new vertical split
- `Ctrl + w + w` : Switch between split windows
- `:close` : Close the current split window

### Other Useful Commands
- `:set number` : Show line numbers
- `:set nonumber` : Hide line numbers
- `:%s/old/new/g` : Replace all occurrences of old with new in the file
- `:s/old/new/g` : Replace all occurrences of old with new on the current line
- `:noh` : Turn off highlighting for search results
- `Ctrl + g` : Show the file name and cursor position in the file