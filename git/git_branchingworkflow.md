---------------------------------------What Each Git Commit Contains

- Each Git commit is more than just a hash and changes; it includes the following components:

-- Commit Hash (SHA-1): A unique identifier for the commit, generated by hashing the commit's content.

-- Pointer to the Parent Commit(s):Each commit points to its immediate predecessor(s), forming a linked list of commits, or a commit chain.
A commit can have more than one parent (as in the case of a merge commit), which links multiple branches of development history.

-- Tree Object:Represents the state of the directory at the time of the commit.
A tree object points to blobs (file contents) and other tree objects (subdirectories).

-- Author Information:The name and email address of the person who made the change.
The timestamp of when the commit was authored.

-- Committer Information:Similar to the author information but reflects who actually committed the change to the repository.
This is different from the author if someone else applied the commit to the repository.

-- Commit Message:A text message describing what the commit changes or the purpose of the commit. This is typically provided by the developer to provide context or details about the changes.

-- Other Metadata:Information like the timestamp of the commit and the committer details.

---

- by default head is the pointer that points to the current branch i.e master branch

  git branch - it will show all the branches
  git checkout <branchName> to switch to that branch
  git branch <brancName> - it will create new branch
  --- to merge 2 branch
  git merge <branchName>
  ------------- resolving conflicts
  it will show the conflicts in files, resolve it manually , and make a commit of the changes, and merge it

--- to checkout out the logs for branch ,
git log --graph

--- deleting a branch , cannot delete the currently checkedout branch

git branch -d <branchName>

----------- checking older commits (\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\*** Important)

-- so we have 2 POINTERS, -HEAD, -master/ different branch pointers
-- so when we do git checkout <commit hash>, it moves the - Head pointer to that commit, and it is a detached head, so to play around we need to create a branch and play around

------------------ Rebase

[1]--[2]--[3]--[4]
|-[]--[]--[]

so here , in the feature branch the base is pointer 2, so instead of merging it with master ,

we rebase it .attaching it the new lastest master , and applying the changes

[1]--[2]--[3]--[4]--[]--[]--[]

------------- so here we rather than merging the changes with another branch , we rebase it to the latest state of that branch and apply the commits