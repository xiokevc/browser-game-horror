/*-------------------------------- Constants --------------------------------*/

const launchBtn = document.getElementById('launchBtn');
const gameOverGif = document.getElementById('gameOverGif');
const overlay = document.getElementById('overlay');

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

//Toggles winning and losing gifs when clicked/ overalys current html slide
if (launchBtn) {
  launchBtn.addEventListener('click', () => {
    gameOverGif.style.display = 'block';
    overlay.style.display = 'flex';
    
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 7000); // hides after 7 seconds
  });
}

/*--------------------------- Start the game! ---------------------------*/
// Initialize game state or UI here if needed


