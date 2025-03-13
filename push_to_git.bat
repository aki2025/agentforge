@echo off
echo Starting Git push process...
cd /d "%~dp0"
git init
git add .
git commit -m "Initial commit of AgentForge project"
git remote add origin https://github.com/aki2025/agentforge.git 2>nul
if errorlevel 1 (echo Remote already exists, skipping...) else (echo Added remote repository)
git push -u origin main
echo Done!
pause 
