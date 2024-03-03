---
title: 'Linux - AWK Command'
date: 2018-06-01
draft:  false   
featured: false  
description: "Linux - AWK Commands"
thumbnail: "/posts/linux/images/linux-command.png"
featureImage: "/posts/linux/images/linux-command.png" 
shareImage: "/posts/linux/images/linux-command.png"
author: "Anand Vyas"
tags:
    - Linux Commands
categories:     
    - Linux
---

AWK is a line-oriented language basically used to manipulating data and generate reports. awk script no required any compiler to compile. In awk we use variables, numeric functions, string function and logical operators.

> Awk is abbreviated from the names of the developers – Aho, Weinberger, and Kernighan.

An awk program operates on each line of an input file. Basic components are

- BEGIN { …. initialization awk commands …}
- { …. awk commands for each line of the file…}
- END { …. finalization awk commands …}

```bash
ls -l | awk 'BEGIN {sum=0} {sum=sum+$5} END {print sum}'
```

### Awk Variables

|Variables|	Description|
|---|---|
|$1,$2… \$n|	fields variables [$0 for entire line]|
|NR|	Number Row - keeps the current count of the row|
|NF|	Number field - keeps the current count if the fields|
|FS|	field separator [The default is “white space” ]|
|RS|	Record separator [The default is “New line character”]|
|OFS|	Specifies the Output separator.|
|ORS|	Specifies the Output separator.|
|ARGC|	Retrieves the number of passed parameters.|
|ARGV|	Retrieves the command line parameters. ARGV[1],ARGV[2]….|
|ENVIRON|	Array of the shell environment variables and corresponding values.|
|IGNORECASE|	To ignore the character case.|

### AWK Control Statements

- if (condition) statement [ else statement ]
- while (condition) statement
- do statement while (condition)
- for (expr1; expr2; expr3) statement
- for (var in array) statement
- break
- continue

### Examples
Employee file `employee.txt` which having employee records

```txt
ajay manager account 45000
sunil clerk account 25000
varun manager sales 50000
amit manager account 47000
tarun peon sales 15000
deepak clerk sales 23000
sunil peon sales 13000
satvik director purchase 80000 
```
#### Print line by line from file

```bash
awk '{print}' employee.txt

#Output
ajay manager account 45000
sunil clerk account 25000
varun manager sales 50000
amit manager account 47000
tarun peon sales 15000
deepak clerk sales 23000
sunil peon sales 13000
satvik director purchase 80000 
```

#### Print the lines which match the given pattern 

```bash
awk '/manager/ {print}' employee.txt 

# Output:  
ajay manager account 45000
varun manager sales 50000
amit manager account 47000 
```
#### Splitting a Line Into Fields
```bash
awk '{print $1,$4}' employee.txt 

#Output:  
ajay 45000
sunil 25000
varun 50000
amit 47000
tarun 15000
deepak 23000
sunil 13000
satvik 80000 
```
#### More Examples

```bash
#  To find/check for any string in any specific column
awk '{ if($3 == "B6") print $0;}' geeksforgeeks.txt

# To print the squares of first numbers from 1 to 6
awk 'BEGIN { for(i=1;i<=6;i++) print "square of", i, "is",i*i; }' 

# Output
square of 1 is 1
square of 2 is 4
square of 3 is 9
square of 4 is 16
square of 5 is 25
square of 6 is 36

# Use of NR built-in variables (Display Line Number)
awk '{print NR,$0}' employee.txt 

# Output
1 ajay manager account 45000
2 sunil clerk account 25000
3 varun manager sales 50000
4 amit manager account 47000
5 tarun peon sales 15000
6 deepak clerk sales 23000
7 sunil peon sales 13000
8 satvik director purchase 80000 

# Use of NF built-in variables (Display Last Field) 
awk '{print $1,$NF}' employee.txt 

# Output
ajay 45000
sunil 25000
varun 50000
amit 47000
tarun 15000
deepak 23000
sunil 13000
satvik 80000 


# Another use of NR built-in variables (Display Line From 3 to 6)  
awk 'NR==3, NR==6 {print NR,$0}' employee.txt 

# Output
3 varun manager sales 50000
4 amit manager account 47000
5 tarun peon sales 15000
6 deepak clerk sales 23000 

# To count the lines in a file:  
awk 'END { print NR }' employee.txt 

# To find/check for any string in any specific column
awk '{ if($3 == "B6") print $0;}' employee.txt 

# To print the squares of first numbers from 1 to n say 6 
awk 'BEGIN { for(i=1;i<=6;i++) print "square of", i, "is",i*i; }' 

# Output
square of 1 is 1
square of 2 is 4
square of 3 is 9
square of 4 is 16
square of 5 is 25
square of 6 is 36
```