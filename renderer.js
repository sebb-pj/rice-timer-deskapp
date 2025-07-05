document.getElementById('min-btn').addEventListener('click', () => {
  window.electronAPI.minimize();
});

document.getElementById('max-btn').addEventListener('click', () => {
  window.electronAPI.maximize();
});

document.getElementById('close-btn').addEventListener('click', () => {
  window.electronAPI.close();
});

document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('menu').style.display = 'grid';
  document.getElementById('cooking-screen').style.display = 'none';
});

document.getElementById('white-rice-btn').addEventListener('click', () => {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('cooking-screen').style.display = 'flex';

  let riceFrame = 0;
  const riceFrames = [
    "assets/sprites/whiterice1.png",
    "assets/sprites/whiterice2.png",
    "assets/sprites/whiterice3.png",
    "assets/sprites/whiterice4.png",
    "assets/sprites/whiterice5.png",
    "assets/sprites/whiterice5.png",
  ];
  const riceSprite = document.getElementById('rice-sprite');

  const riceAnim = setInterval(() => {
    riceFrame = (riceFrame + 1) % riceFrames.length;
    riceSprite.src = riceFrames[riceFrame];
  }, 250);

  let time = 10;
  const timerDisplay = document.getElementById('timer');
  const cookingStatus = document.getElementById('cooking-status');
  const backBtn = document.getElementById('back-btn');

  const countdown = setInterval(() => {
    time--;
    timerDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(countdown);
      clearInterval(riceAnim);
      cookingStatus.textContent = "Done!";
      backBtn.style.display = 'block';
    }
  }, 1000);
});