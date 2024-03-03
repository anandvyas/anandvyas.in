---
title: 'Linux - Shell Script'
date: 2024-02-01
draft:  false   
featured: false  
description: "Linux - Shell Script"
thumbnail: "/posts/linux/images/shell-script.png"
featureImage: "/posts/linux/images/shell-script.png" 
shareImage: "/posts/linux/images/shell-script.png"
author: "Anand Vyas"
tags:
    - Linux
    - Shell Script
categories:
    - Linux
---

### Shebang
On Linux, a shebang `#!` is a special line at the beginning of a script that tells the operating system which interpreter to use when executing the script. This line, also known as a “sharp-exclamation”, “sha-bang”, “hash-bang”, or “pound-bang”, is the first line of a dash and starts with `#!` followed by the path to the interpreter. The Shebang line is important because it allows you to run scripts written in any language, not just shell scripts, on a Linux system.

```bash
#! /bin/sh
#! /bin/bash
#! /bin/tcsh
#! /bin/csh
#! /bin/ksh
#!/usr/bin/env python2
#!/usr/bin/env node
```

- Example (use nodejs as interpreter)
```bash
#!/usr/bin/env node
console.log('Hello world!');
```

### Echo Command
```bash
echo Hello World!
```

### Comments
Every line other than the first line (#! /bin/..) that STARTS with a '#'(pound/sharp/hash) marks a comment
```bash
#!/bin/bash
# Let's print something	=> A comment
echo "Hello There"
# End of printing => A comment
```

### Variables
A variable name could contain any alphabet (a-z, A-Z), any digits (0-9), and an underscore ( _ ). However, a variable name must start with an alphabet or underscore.

> NOTE: NO SPACES before or after the '='

```bash
NAME="Bob"
echo "My name is $NAME"
echo "My name is ${NAME}"
```

### System defined variables
To get the list of the SDV (system defined variables)
```bash
env 
```

some of the important variables which are commanly used in shell script 

- `${SHELL}:` Current shell interpreter information 
- `${HOME}:` will show the home directory of current user
- `${OSTYPE}:` type type of operating system.
- `${PATH}:` A list of directories to be searched when executing commands. 
- `${PPID}:` parent process id
- `${PWD}:` present working directory
- `${HOSTNAME}:` hostname of machine.
- `${UID}:` user id

### Special variables
- `$0` - Check current script name
- `$n` - Sequence of arguments
- `$#` - To check count (number of arguments) in script.
- `$*` - It stores complete set of positional parameter in a single string
- `$@` - Quoted string treated as separate arguments.
- `$?` - exit status of command
- `$$` - Check PID of current shell.
- `$!` - check PID of last background Job



### Array
```bash
Fruits=('Apple' 'Banana' 'Orange')

Fruits[0]="Apple"
Fruits[1]="Banana"
Fruits[2]="Orange"

# Working with arrays
echo ${Fruits[0]}           # Element #0
echo ${Fruits[@]}           # All elements, space-separated
echo ${#Fruits[@]}          # Number of elements
echo ${#Fruits}             # String length of the 1st element
echo ${#Fruits[3]}          # String length of the Nth element
echo ${Fruits[@]:3:2}       # Range (from position 3, length 2)

# Operations
Fruits=("${Fruits[@]}" "Watermelon")    # Push
Fruits=( ${Fruits[@]/Ap*/} )            # Remove by regex match
unset Fruits[2]                         # Remove one item
Fruits=("${Fruits[@]}")                 # Duplicate
Fruits=("${Fruits[@]}" "${Veggies[@]}") # Concatenate
lines=(`cat "logfile"`)                 # Read from file

# Iteration
for i in "${arrayName[@]}"; do
echo $i
done
```

### Storing commands in variables 
```bash
VAR_NAME=$(command)
VAR_NAME=`command`
```

### Read user input
```bash
read -p "Enter your name: " NAME
echo "Hello $NAME, nice to meet you!"
```

### IF Statement
```bash
if [ "$NAME" == "Brad" ]
then
echo "Your name is Brad"
fi
```

### IF-ELSE Statement
```bash
if [ "$NAME" == "Brad" ]
then
echo "Your name is Brad"
else 
echo "Your name is NOT Brad"
fi
```

### ELSE-IF (elif) Statement
```bash
if [ "$NAME" == "Brad" ]
then
echo "Your name is Brad"
elif [ "$NAME" == "Jack" ]
then  
echo "Your name is Jack"
else 
echo "Your name is NOT Brad or Jack"
fi
```

### Comparison 
- `val1 -eq val2` Returns true if the values are equal
- `val1 -ne val2` Returns true if the values are not equal
- `val1 -gt val2` Returns true if val1 is greater than val2
- `val1 -ge val2` Returns true if val1 is greater than or equal to val2
- `val1 -lt val2` Returns true if val1 is less than val2
- `val1 -le val2` Returns true if val1 is less than or equal to val2

```bash
NUM1=31
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then
echo "$NUM1 is greater than $NUM2"
else
echo "$NUM1 is less than $NUM2"
fi
```

### File condition
- `-d` file   True if the file is a directory
- `-e` file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
- `-f` file   True if the provided string is a file
- `-g` file   True if the group id is set on a file
- `-r` file   True if the file is readable
- `-s` file   True if the file has a non-zero size
- `-u`    True if the user id is set on a file
- `-w`    True if the file is writable
- `-x`    True if the file is an executable

```bash
FILE="test.txt"
if [ -e "$FILE" ]
then
echo "$FILE exists"
else
echo "$FILE does NOT exist"
fi
```

### CASE Statement
```bash
read -p "Are you 21 or over? Y/N " ANSWER
case "$ANSWER" in 
[yY] | [yY][eE][sS])
    echo "You can have a beer :)"
    ;;
[nN] | [nN][oO])
    echo "Sorry, no drinking"
    ;;
*)
    echo "Please enter y/yes or n/no"
    ;;
esac
```

### FOR LOOP
```bash
NAMES="Brad Kevin Alice Mark"
for NAME in $NAMES
do
    echo "Hello $NAME"
done
```

#### Example - FOR LOOP TO RENAME FILES
```bash
FILES=$(ls *.txt)
NEW="new"
for FILE in $FILES  
do
    echo "Renaming $FILE to new-$FILE"
    mv $FILE $NEW-$FILE
done
```

### WHILE LOOP - READ THROUGH A FILE LINE BY LINE
```bash
LINE=1
while read -r CURRENT_LINE
do
    echo "$LINE: $CURRENT_LINE"
    ((LINE++))
done < "./new-1.txt"
```

### FUNCTION
```bash
function sayHello() {
echo "Hello World"
}
sayHello
```

### FUNCTION WITH PARAMS
```bash
function greet() {
echo "Hello, I am $1 and I am $2"
}
greet "Brad" "36"
```

### Parameter expansions
```bash
name="John"
echo ${name}
echo ${name/J/j}    #=> "john" (substitution)
echo ${name:0:2}    #=> "jo" (slicing)
echo ${name::2}     #=> "jo" (slicing)
echo ${name::-1}    #=> "joh" (slicing)
echo ${food:-Cake}  #=> $food or "Cake"

length=2
echo ${name:0:length}  #=> "jo"

# ---------------------------------

STR="/path/to/foo.cpp"
echo ${STR%.cpp}    # /path/to/foo
echo ${STR%.cpp}.o  # /path/to/foo.o

echo ${STR##*.}     # cpp (extension)
echo ${STR##*/}     # foo.cpp (basepath)

echo ${STR#*/}      # path/to/foo.cpp
echo ${STR##*/}     # foo.cpp

echo ${STR/foo/bar} # /path/to/bar.cpp

# -----------------------------------

STR="Hello world"
echo ${STR:6:5}   # "world"
echo ${STR:-5:5}  # "world"

SRC="/path/to/foo.cpp"
BASE=${STR##*/}   #=> "foo.cpp" (basepath)
DIR=${SRC%$BASE}  #=> "/path/to" (dirpath)
```

### Examples
- [Create MySQL database and manage the user with permission](../examples/shell-script/create-mysql-database-user)
- [User management in Linux](../examples/shell-script/linux-user-management)
- [Take MySQL database backup and push to AWS S3](../examples/shell-script/mysql-backup-push-to-s3)
