--- working on a local repo(single user)

1. Initialize repository
2. Add and commit changes
3. Branch and merge/rebase
4. Push changes

-- working with a cloud repo(github/gitlab) multi user

1. Clone repository
2. Add and commit changes
3. Branch and merge/rebase
4. Pull and merge/rebase
5. Resolve merge conflicts
6. Push changes

------ GiT

1. to initialize git in a directory - git init
2. to get the lastest status/state of the files - git status
3. to add files to the staging area, - git add <file name> or <.> to add all files changed
4. to commit the changes- git commit -m "add message along with the commit"

----- Git follows the 3 state architecture

1. working directory - the directory within which we make changes to the files.managed by the local OS.
2. staging area - the files we want to take snapshot of, we add it using git add
3. commit state - the commit histories, or the snapshots of the different changes of the directory

---- selective staging and committing

- file index.html, app.js
- made a change to index.html to state 1 and added to staging area.
- made a change to app.js to state 1 and added to staging area.
- made a change to index.html to state 2 and added to staging area.

-- now if we commit, it will capture the state 1 of index.html and app.js .

- to add state 2 of index.html , we have to make a new stage and commit it.

---------- git log/ diff between each sanpshots

- it gets a log of all the previous commits.
- deleting is also a state, and we have to stage it and commit the changes. git add . , git commit .
- to get the diff between each snapshots, git log -p

------------- git checkout/git restore

-- git checkout -- <file name/.> , it will override the last changes made, and move to the last committed state.(clearing local changes with git checkout)
-- git restore --staged <file name/.> , to unstage the staged files

------------- git update your last commit

- git commit --ammend , this will let you update the last commit
  ------- to view the changes or the difference between the last committ and current state

- git log -p/ git diff

----- .gitignore

-- to avoid files from staging area and committing
