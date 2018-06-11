
# Constants for making Code

Code Editors:       writing & explaining code.

Version Control:    storing code.
                    enabling collaboration & codebase documentation.


> You will be using these for the rest of your (coding) life,
> regardless of what you're programming.
>
> Get comfortable.

---

# Git Fundamentals

What is Version Control?

What is Git?

Why is it hard?

How does it work?
---

# What?   Version Control?

Version Control is a developer's "Save" button.

But there are different ways to save your project's:

1. Your local code!
   Freeform, like how you structure you folders on your own computer

2. Public record of your code!
  * When presenting your work on a place like GitHub, you want to lend
    meaning to the history of your code!
  * Or, you just need to throw your "local code" up into the web for
    team members to hack ontop of.

3. With extra metadata... For things like deployments.
   We live in a (coding) world of continuously deployed API's & Apps.
---

# What?   Git?

Git is three things:


1. simple immutable key:value database

2. complex cli to edit the database

3. the most useful pain-in-the-arse tool you'll ever learn
---

# `git help`

INDIRECTION!

**CLI is complex.** 😭

> 157 individual commands, with over 1000 command arguments.

Urgh. Distracting.

* We only care about a common commands... Maybe 6?
* Of those 6 commands, we need to know (maybe) 3-4 arguments?
---

# But the concepts are small!

 BRANCHES                      COMMITS
   The human names for           The snapshots of a
   "commits" in git!             persons code.

I think of BRANCHES and COMMITS like I think of VARIABLES and ARRAYS*...




_When I say "arrays", I actually mean tries, but they aren't as ubiquitous._

---


# How?

> "Tell me how this works Lochlan"

Ok, I try.


## The 3 States

Working Directory
> Your actual files, right there in your directories!

Index
> The staging area for changes.

Commits (Git Objects)
> Changes to files & directories, stored in git database as immutable objects.
---


# Git Database Structure

$ ls -F1 .git
HEAD
config*
description
hooks/
info/
objects/
refs/

---


## 'Plumbing Commands'

git hash-object      # stores content in git database, gives you back a hash key.
git cat-file         # reads content from the git database, given a hash key.
git update-index     # stages git databases keys paired with file/directory names.
git write-tree       # stores a 'tree' object to the git database, based on the staged key/name pairs.
git read-tree        # reads a 'tree' object from the git database into the stage.
git commit-tree      # stores a 'commit' object to the git database, based on a tree object / commit details pair.

## 'Porcelain' Commands

git log              # Shows the history for the commit, defaulting to current commit.
git checkout         # Reads files/dirs from database. Changes the HEAD.
git stage            # Saves changes to index.
git commit           # Saves index to the database.
git reset            # Manipulates index and refs.
git cherrypick       # Copies an object from the database, commits it ontop of current commit object
git rebase           # Manipulate history of commits.
git merge            # Creates merge-commits from two seperate commit parents.
git reflog           # Shows history of commands run against git database.

---


# Git Objects

## Blob

Stores content (text).
Header:
- Content Length

## Tree

Stores names of files mapped to git objects (blob or tree).
Header:
- Don't think it has one haha

## Commit

Compiles the following:
- Points to a tree object (directory / files)
- Points to a parent commit object. Two parents if it is a special merge-commit.
- Author details
- Committer details
- Other misc details (gpg signatures etc)
- Commit message
  * Summary
  * Body
---

# fin
