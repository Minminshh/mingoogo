1.	What is the difference between git fetch and git pull?
a.	git fetch is a command that downloads new commits, branches, and data from the remote repository to local machine so can review them. It’s completely safe and does not alter the local working files or merge any code.
b.	Git pull is a combination command, runs git fetch to download data, and then immediately and forcefully runs git merge to integrate those remote changes directly into current local working files. 

2.	What is the difference between git merge and git rebase? Pro and Cons?
a.	git merge is a command combine branches by creates a new chronological “merge commit” that ties their histories together. Pros: safe, non-destructive, preserves exact history timeline of al work. Cons: Can result in messy, cluttered commit history if there are many branches.
b.	git rebase is a command that combines branches by moves entire branch and attaching it to the very tip of the main branch, rewriting the commit history. Pros: creates a perfectly clean, linear history. Cons: dangerous if used on shared public branches because rewriting history can overwrite or break other’s local repositories. 

3.	How do you resolve merge conflicts in Git?
a.	A merge conflict occurs when Git cannot automatically merge code because two developers edited the exact same code of a files, to resolve merge conflicts, open the conflicted files, manually delete the conflict markers (<<<<, ====, >>>>), keep the correct code, save, run git add, and then run git commit to finalize the merge.
 
4.	What is the purpose of .gitignore?
a.	.gitignore is a configuration files that tells Git exactly which local files and directories to intentionally exclude from version control. It’s crucial for keeping repositories clean and secure by preventing the upload of sensitive data (.env with API keys), auto-generated system files (passwords), and heavy dependencies (node modules).

5.	How do you undo a commit that has already been pushed?
a.	To undo a commit that has already been pushed is to use git revert [commit-hash]. This command creates a brand-new commit that perfectly undoes the changes of the old, keeping the shared history intact. (Never use git reset on pushed code).

6.	Can you give me some common git commands?
a.	Git init initializes a new Git repository in current folder
b.	git clone downloads a complete copy of a remote repository to local machine
c.	git status shows the current state of your working directory
d.	git add stages all modified files to be included in the next commit
e.	git commit -m “” save a snapshot of the staged changes with a descriptive message.
f.	git push uploads the local commits to the remote repository like Github.
g.	git pull runs git fetch to download data, and then immediately and forcefully runs git merge to integrate those remote changes directly into current local working files. 
h.	git checkout/switch moves the working directory to a different branch.
i.	git branch list all local branches or creates a new one. 

