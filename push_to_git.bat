@echo off
cd /d "C:\Users\Aakash Kaushal\Desktop\projects\agentforce\agentforge"

:: Step 1: Initialize a new Git repository
echo Initializing new Git repository...
git init

:: Step 2: Create a .gitignore file
echo Creating .gitignore file...
echo node_modules/ > .gitignore
echo .env >> .gitignore
echo frontend/node_modules/ >> .gitignore
echo backend/node_modules/ >> .gitignore

:: Step 3: Stage all files
echo Staging all files...
git add .

:: Step 4: Make the initial commit
echo Committing initial changes...
git commit -m "Initial commit of AgentForge project"

:: Step 5: Set up the remote repository
echo Setting up remote repository...
git remote add origin https://github.com/aki2025/agentforge-new.git

:: Step 6: Rename branch to main (if needed)
echo Renaming branch to main...
git branch -M main

:: Step 7: Push to GitHub
echo Pushing to GitHub...
git push -u origin main

:: Inform user
echo Project successfully pushed to GitHub!
echo Visit your repository at https://github.com/aki2025/agentforge-new
pause