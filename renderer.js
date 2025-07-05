document.getElementById('min-btn').addEventListener('click', () => {
  window.electronAPI.minimize();
});

document.getElementById('max-btn').addEventListener('click', () => {
  window.electronAPI.maximize();
});

document.getElementById('close-btn').addEventListener('click', () => {
  window.electronAPI.close();
});

document.getElementById('white-rice-btn').addEventListener('click', () => {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('cooking-screen').style.display = 'block';

  let time = 10;
  const timerDisplay = document.getElementById('timer');
  const interval = setInterval(() => {
    time--;
    timerDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Done!";
      document.getElementById('rice-sprite').textContent = "🍚"; // Finished rice
    }
  }, 1000);
});