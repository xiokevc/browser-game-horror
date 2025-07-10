/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById('');
const startButton = document.getElementById('start-game');

/*-------------------------------- Functions --------------------------------*/

function init() {

};

/*----------------------------- Event Listeners -----------------------------*/

// Cached element
const startGame = document.getElementById('start-game');

// Event listener for clicking "start game"
startGame.addEventListener('click', () => {
  alert('Game Starting...'); // Replace with init() or load game page later
  // Example: window.location.href = 'game.html';
});

/*--------------------------- Start the game! ---------------------------*/


// // Cache audio element
// const audioElement = document.getElementById('backgroundAudio');

// // Cache Start button
// const startButton = document.getElementById('startButton');

// startButton.addEventListener('click', () => {
//   // Play background music when game starts
//   audioElement.play().catch(err => {
//     console.log("Autoplay blocked, user must interact:", err);
//   });

//   // Continue your init() or game start logic here
//   init(); // if you have an init function
// });

// audioElement.volume = 0.3; // 30% volume
