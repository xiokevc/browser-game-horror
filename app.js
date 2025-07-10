/*-------------------------------- Constants --------------------------------*/
console.log('hot cheetos');
const storyNodes = [
    {
        id: 'start'

    }

];

const msg = ['Game Over', 'You have Escaped!'];

const menu = ['Exit Game', 'Resume', 'Restart']


/*---------------------------- Variables (state) ----------------------------*/

let currentNodeId;
let isGamerOver = false;
let flashlightOn = false;


/*------------------------ Cached Element References ------------------------*/

const messageEl = document.getElementById('');
const startButton = document.getElementById('startButton');

/*-------------------------------- Functions --------------------------------*/

function init() {

};

/*----------------------------- Event Listeners -----------------------------*/

/*--------------------------- Start the game! ---------------------------*/
startButton.addEventListener('click', () => {
  window.location.href = '1A.html'; // replace with your target page
});

init();

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
