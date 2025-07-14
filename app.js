

/*-------------------------------- Constants --------------------------------*/

const launchBtn = document.getElementById('launchBtn');
const gameOverGif = document.getElementById('gameOverGif');
const overlay = document.getElementById('overlay');
const flashlight = document.getElementById('flashlight');

let flashlightOn = false;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const radius = 150; // adjust flashlight size here

/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

function updateFlashlight() {
  if (flashlightOn) {
    flashlight.style.background = `
      radial-gradient(circle ${radius}px at ${mouseX}px ${mouseY}px, transparent 0%, black 100%)
    `;
  }
}

/*----------------------------- Event Listeners -----------------------------*/

launchBtn.addEventListener('click', () => {
  gameOverGif.style.display = 'block';
  overlay.style.display = 'flex';
  
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 5000); // hides after 5 seconds
});

// Update mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  updateFlashlight();
});

// Toggle flashlight with F key
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'f') {
    flashlightOn = !flashlightOn;
    flashlight.style.display = flashlightOn ? 'block' : 'none';
    updateFlashlight();
  }
});

/*--------------------------- Start the game! ---------------------------*/



