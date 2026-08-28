document.addEventListener('DOMContentLoaded', () => {
  const stageNodes = document.querySelectorAll('.stage-node');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');
  const detailCommand = document.getElementById('detail-command');

  const stageData = {
    working: {
      title: '1. Working Directory (Unstaged Files)',
      desc: 'Contains your live files currently being edited. Changes made here are not tracked by Git until explicitly staged using git add.',
      command: '$ git status'
    },
    staging: {
      title: '2. Staging Area (Index)',
      desc: 'A temporary snapshot area where you organize files before saving them permanently into your repository history.',
      command: '$ git add <filename>   # or git add .'
    },
    local: {
      title: '3. Local Repository (HEAD)',
      desc: 'Stores your committed snapshot history inside your local .git folder. Every commit gets a unique SHA hash.',
      command: '$ git commit -m "feat: your commit message"'
    },
    remote: {
      title: '4. GitHub Remote Repository',
      desc: 'A cloud-hosted Git server (GitHub) accessible by your team. Allows backup, collaboration, pull requests, and CI/CD.',
      command: '$ git push origin main'
    }
  };

  stageNodes.forEach(node => {
    node.addEventListener('click', () => {
      stageNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const stageKey = node.getAttribute('data-stage');
      const data = stageData[stageKey];

      if (data) {
        detailTitle.textContent = data.title;
        detailDesc.textContent = data.desc;
        detailCommand.textContent = data.command;
      }
    });
  });

  // Activate first stage by default
  stageNodes[0].click();
});
