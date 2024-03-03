---
title: 'Git - Interview Questions'
date: 2024-02-01
draft:  true   
featured: false  
description: "Git - Interview Question"
thumbnail: "/posts/git/images/git.png"
featureImage: "/posts/git/images/git.png" 
shareImage: "/posts/git/images/git.png"
author: "Anand Vyas"
tags:
    - Git
    - Interview Question
categories:     
    - Git
---


### What is a version control system (VCS)?

A VCS keeps track of the contributions of the developers working as a team on the projects. They maintain the history of code changes done and with project evolution, it gives an upper hand to the developers to introduce new code, fixes bugs, and run tests with confidence that their previously working copy could be restored at any moment in case things go wrong.

```bash
apt-get install git
```

### What is the difference between git pull and git fetch?

`git fetch` only downloads new data from a remote repository, but it doesn’t integrate any of the downloaded data into your working files. All it does is provide a view of this data. 

`git pull` downloads as well as merges the data from a remote repository into your local working files. It may also lead to merge conflicts if your local changes are not yet committed. Use the `git stash` command to hide your local changes.

### How do you revert a commit that has already been pushed and made public?

One or more commits can be reverted through the use of git revert. This command, in essence, creates a new commit with patches that cancel out the changes introduced in specific commits. In case the commit that needs to be reverted has already been published or changing the repository history is not an option, git revert can be used to revert commits. Running the following command will revert the last two commits:
```bash
git revert HEAD~2..HEAD
```
Alternatively, one can always checkout the state of a particular commit from the past, and commit it anew.
