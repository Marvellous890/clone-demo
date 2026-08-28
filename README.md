# 🚀 GitFlow Hub — Clone Demonstration Project

Welcome to **GitFlow Hub**, an interactive visualizer built to demonstrate Git workflows in action!

## 📋 Project Purpose
This repository is configured with a rich Git commit history to demonstrate **cloning a repository from GitHub** during your Git & GitHub presentation.

## 🛠️ Presentation Steps (Demonstrating Clone)
1. **Push this repository to GitHub** prior to your presentation (or live):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/project-1-clone-demo.git
   git branch -M main
   git push -u origin main
   ```

2. **Demonstrate Cloning on stage**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/project-1-clone-demo.git
   cd project-1-clone-demo
   ```

3. **Show Commit History to audience**:
   ```bash
   git log --oneline --graph
   ```

## 💻 Tech Stack
- HTML5 / CSS3 (Vanilla Glassmorphism UI)
- Vanilla JavaScript
