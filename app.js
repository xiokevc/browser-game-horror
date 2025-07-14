

/*-------------------------------- Constants --------------------------------*/

const launchBtn = document.getElementById('launchBtn');
const gameOverGif = document.getElementById('gameOverGif');
const overlay = document.getElementById('overlay');

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

launchBtn.addEventListener('click', () => {
  gameOverGif.style.display = 'block';
  overlay.style.display = 'flex';
  
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 7000); // hides after 5 seconds
});

/*--------------------------- Start the game! ---------------------------*/



