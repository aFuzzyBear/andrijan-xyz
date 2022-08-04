---
layout: "../../../layouts/BlogLayout.astro"
title: Git Guide For Beginners
author: Andrijan Tasevski
imageThumbnail: "/blog-thumbnails/git-guide-thumbnail.png"
gitLink: "https://github.com/andrijantasevski/andrijan-xyz/blob/19-create-blog-for-website/src/pages/blog/posts/git-guide.md"
date: 03 Aug, 2022
dateUpdated: 04 Aug, 2022
---

## Content

- [1. Installing git](#installing-git)
- [2. Git global set up](#git-global-set-up)
- [3. States of files](#states-of-files)
- [4. Making a local repository and connecting it to remote](#making-a-local-repository-and-connecting-it-to-remote)
- [5. Cloning a remote repository](#cloning-a-remote-repository)
- [6. Checking status/state of files](#checking-status/state-of-files)
- [7. Adding files to staging area](#adding-files-to-staging-area)
- [8. Making commits](#making-commits)
- [9. Pushing commits to remote](#pushing-commits-to-remote)
- [10. Listing branches](#listing-branches)
- [11. Making branches](#making-branches)
- [12. Switching between branches](#switching-between-branches)
- [13. Merging branches](#merging-branches)
- [14. Removing branches](#removing-branches)
- [15. Fetch vs. pull](#fetch-vs-pull)
- [16. Fetch from remote](#fetching-from-remote)
- [17. Pull from remote](#pulling-from-remote)

## Installing git

In this guide on installing git, we will assume that we are using a UNIX-based system, specifically a Linux-based system.

We will also assume that we have a sudo user set up on our system.

#### Fetching updates and installing them

```bash
$ sudo apt update
$ sudo apt upgrade
```

#### Installing git

```bash
$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git
```

#### Checking the installed version of git

```bash
$ git --version
```

## Git global set up

In order to connect properly to a remote service (GitHub, GitLab, BitBucket) to host our repositories (henceforth repo) or work with a team, we need to set up our identity (our team members need to know who is making commits):

#### Setting up our name and e-mail

To set up our name and e-mail in git, we run the following commands:

```bash
git config --global user.name "name-and-lastname"

git config --global user.email "email"
```

Now with actual information:

```bash
// Add our name

$ git config --global user.name "Andrijan Tasevski"

// Add our e-mail

$ git config --global user.email "andrijantasevski@gmail.com"
```

#### Setting up main as default branch

The default branch on GitHub and GitLab has been changed from **master** to **main**.

When we work on new projects, we always need to use main as our default branch and not master as we will run into issues.

To change the name of our default branch from master to main **globally**, we run the following command:

```bash
$ git config --global init.defaultBranch main
```

#### Changing from main to master for work on older projects

If we are working on an older project that still uses master as our branch, we can run the following following command to make the change:

**git branch -m [new-name]**

Now with actual data:

```bash
// Rename branch main to master

$ git branch -m master
```

_Make sure you are on branch main when you execute this command._

_[Switching between branches](#switching-between-branches)_

#### Setting up colors

To review the git output in a terminal in an easier way, we can set up automatic coloring:

```bash
$ git config --global color.ui auto
```

## States of files

Files in a git repo can be found in two states:

**Tracked** — all the files that we have staged or committed.

**Untracked** — all the other files that we haven't staged or committed.

#### States of tracked files

Tracked files can be in one of these states:

**Unmodified/Committed** — there have been no changes made since the last time we staged/committed the file.

**Modified** — there have been changes since the last time we staged/committed the file.

**Staged** — the file is in the staging area and is ready to be committed.

## Making a local repository and connecting it to remote

#### git init

To make a local repo, we need to make a directory on our machine and initialize git in it.

We write the following commands to initialize a repo:

```bash
// Check the current working directory

$ pwd

// We create a directory

$ mkdir git-example

// Open the directory

$ cd git-example

// Initialize git when in directory

$ git init
```

#### git remote add [alias] [https/ssh url]

To connect our local repo to a remote one, we have to use **git remote add** command and specify the https/ssh path provided to us by our provider (GitHub, GitLab, BitBucket):

```bash
$ git remote add origin
```

To check that we have successfully added our origin, we use the following command:

```bash
$ git remote -v
```

If all the above steps were successful, we can make commits and push them to our remote repository.

_The alias can be named anything we want, but it is better to name it origin as it is the norm._

## Cloning a remote repository

#### git clone [https/ssh]

To clone a remote repository that is hosted on a service like GitHub, GitLab, BitBucket, we can run one of the following commands depending on your workflow (we assume that we are using SSH in this guide):

```bash
// Using HTTPS

git clone

// Using SSH

git clone
```

## Checking status/state of files

To check the status/state of the modified files in our repo, we run the following command:

```bash
$ git status
```

## Adding files to staging area

To add files and the changes we have made to them to the staging area, we can run either of the following commands:

**git add [name-of-file]** — to add only one specific file to staging area

**git add .** — to add all files to staging area

Now with real data:

```bash
// Add only index.html to staging area

$ git add index.html

// Add all files to staging area

$ git add .
```

## Making commits

To commit our staged files to our local repo database, we run the following command:

**git commit -m "message" -m "description"**

As we can see, the commit command can take two flags:

- **The first -m flag** stands for message.
- **The second -m flag** stands for description.

Now with real data:

```bash
$ git commit -m "Initial commit" -m "Added basic folder structure"
```

## Pushing commits to remote

#### git push [alias] [name-of-branch]

To push the changes we have committed to a remote repository (GitHub, GitLab), we run the following command:

**git push [alias] [name-of-branch]**

Now with actual data:

```bash
$ git push origin main
```

If the branch that we are on has been created locally and has not been pushed to remote, we must use the flag -u to connect them:

```bash
$ git push -u origin main
```

_In the example, we are using main as the branch we are pushing our changes to. However, if we are working on another branch (e.g. development branch), we have to push our changes to that specific branch (git push -u origin development)_.

## Checking history of commits

#### git log

If we want to check the history of all the commits we have made in the branch that we are currently in, we run the following command:

```bash
$ git log
```

## Listing branches

#### git branch

To see all the branches we have in our **local** git repo, we run the following command:

```bash
// List the local branches

$ git branch
```

#### git branch --all

To see the local branches and others that may be on a remote repository, but we haven't yet pulled to our local repo, we add **the flag --all**:

```bash
// List all the local and remote branches

$ git branch --all
```

_This could be especially helpful when we clone a remote repository, as we will not be able to see the remote branches on the remote repository without the -a flag._

## Making branches

#### git branch [branch-name]

To make a new branch, we use the following command:

```bash
$ git branch example-branch
```

#### git checkout -b [branch-name]

To make a new branch and switch to it immediately after creating it, we can use the following command:

```bash
$ git checkout -b example-branch
```

## Switching between branches

#### git checkout [branch-we-want-to-switch-to]

To switch between the different branches on our repo, we run the following command:

```bash
// If we are currently on main and want to switch to example-branch

$ git checkout example-branch
```

## Merging branches

To merge a branch into the branch we are on (the current branch), we run the following command:

**git merge [branch-to-be-merged-into-current]**

Now with actual data:

```bash
// Switch to main branch, if we are not on it

$ git checkout main

// Merge example-branch into main

$ git merge example-branch
```

## Removing branches

#### git branch -d [branch-name]

To remove a **local branch** in our repo, we run the following command:

```bash
$ git branch -d example-branch
```

#### git branch -D [branch-name]

To **force delete** a branch, we run the following command:

```bash
$ git branch -D example-branch
```

#### git push --delete [alias] [branch-to-be-deleted]

Although it may appear unusual at first, when we want to delete a remote branch, we have to push the changes to remote with the flag --delete:

```bash
$ git push --delete remote example-branch
```

## Fetch vs. Pull

Before we do fetch or pull, we need to be able to differentiate between the two and understand their functions.

**Fetch** - we fetch all the remote branches and _not the files_. More specifically, we fetch meta-data.

**Pull** - we fetch all the branches and copy all the changes that have been made to files.

## Fetching from remote

#### git fetch [alias]

To fetch all the remote branches, we run the following command:

```bash
$ git fetch origin
```

## Pulling from remote

#### git pull [alias] [branch]

To pull all the commits (changes to files) from remote, we run the following command:

```bash
$ git pull origin main
```

## FAQ

#### 1. I have cloned a project, but I don't see the remote branches. What should I do?

First, to be sure that you are up to date with the newest changes from remote fetch the branches and meta-data:

```bash
$ git fetch remote
```

Then, list both the local and remote branches with the **--all flag**:

```bash
$ git branch --all
```

Switch to the desired branch (branch and files in it will be automatically pulled from remote):

```bash
// Template

$ git checkout [branch-to-switch-to]

// With actual data

$ git checkout example-branch
```

#### 2. I have tried pulling commits from remote, but git is not allowing me to because of the commits having unrelated histories. What should I do?

```bash
// If your default branch is master

$ git pull origin master --allow-unrelated-histories

// If your default branch is main

$ git pull origin main --allow-unrelated-histories
```

#### 3. I can't push a local branch to remote. What should I do?

If the branch is only on our local repo and not on remote, we may sometimes need to use the **--set-upstream** or **-u** (for short) flag along with the push command:

```bash
$ git push --set-upstream origin main

// Shorter flag

$ git push -u origin main
```

## Additional reading and sources

[Git Cheat Sheet by GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf)

## Changes and pull requests

I accept suggestions, changes and pull requests.

The repo is a work in progress.

This cheat sheet is for learning purposes.
