// Animations

// Boiling pot animation

const potSprite = document.getElementById('pot-sprite');

let potFrame = 0;
  const potFrames = [
    "assets/sprites/boilingpot1.png",
    "assets/sprites/boilingpot2.png",
    "assets/sprites/boilingpot3.png",
    "assets/sprites/boilingpot4.png",
    "assets/sprites/boilingpot5.png",
    "assets/sprites/boilingpot6.png"
  ];
  
const potAnim = setInterval(() => {
  potFrame = (potFrame + 1) % potFrames.length;
  potSprite.src = potFrames[potFrame];
}, 250);

// White rice animation

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

// Event listeners for window controls

document.getElementById('min-btn').addEventListener('click', () => {
  window.electronAPI.minimize();
});

document.getElementById('max-btn').addEventListener('click', () => {
  window.electronAPI.maximize();
});

document.getElementById('close-btn').addEventListener('click', () => {
  window.electronAPI.close();
});

document.getElementById('pre-white-rice-btn').addEventListener('click', () => {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('pre-cooking-screen').style.display = 'flex';
});

document.getElementById('white-rice-btn').addEventListener('click', () => {
  document.getElementById('pre-cooking-screen').style.display = 'none';
  document.getElementById('cooking-screen').style.display = 'flex';

  

  let time = 20;
  const timerDisplay = document.getElementById('timer');
  const cookingStatus = document.getElementById('cooking-status');
  const backBtn = document.getElementById('back-btn');
  timerDisplay.textContent = time;
  cookingStatus.textContent = "Cooking...";

  const countdown = setInterval(() => {
    time--;
    timerDisplay.textContent = time;
    if (time <= 0) {
      clearInterval(countdown);
      cookingStatus.textContent = "Done!";
      backBtn.style.visibility = 'visible';
    }
  }, 1000);

  document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'grid';
    document.getElementById('cooking-screen').style.display = 'none';

    clearInterval(countdown);
    backBtn.style.visibility = 'hidden';
  });
});

