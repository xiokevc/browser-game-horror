# User Stories

AS A PLAYER:

---Start Game---
- I want to start the game from a landing title page
- I want an option to click ‘Start Game’

---Choices---
- I want to be presented with multiple pathways at each stage
- I want the story to progress based on my decisions

---Consequences---
- I want to see the consequences of my choices immediately after selecting an option
- I want to feel the impact of my decisions

---Ending---
- I want to reach different endings based on my choices
- I want replayability to see different outcomes

---Restart---
- I want the ability to restart the game at any given point
- I want an options menu that opens when I press Escape (Esc)
- I want to explore different choices without refreshing the page

---Audio/Visual Immersion---
- I want to hear background audio
- I want scary visuals and jumpscare effects
- I want a toggleable flashlight as my cursor
- I want a transitioning between changing story nodes

# Pseudocode

Define constants:
  - STORY_NODES: array of story objects with id, text, choices, consequences, endings
  - START_NODE_ID: id of the starting story node

Define state variables (do not assign values yet):
  - currentNodeId: the id of the current story node
  - isGameOver: boolean to track if the game has ended
  - flashlightOn: boolean to track if flashlight cursor is active
  - audioPlaying: boolean to track background audio status

Cache DOM elements:
  - landingPage: container for title screen
  - startButton: 'Start Game' button
  - storyContainer: area displaying story text
  - choicesContainer: area displaying choice buttons
  - playAgainButton: button to restart the game
  - optionsMenu: hidden menu for settings/restart
  - flashlightCursor: element representing flashlight effect
  - audioElement: background audio element

Add event listeners:
  - On startButton click:
      Hide landingPage
      Invoke init()
  - Delegated listener on choicesContainer:
      If a choice button is clicked:
          Call handleChoice() with choice id
  - On playAgainButton click:
      Invoke init()
  - On Escape key press:
      Toggle optionsMenu visibility
  - On optionsMenu 'Restart' button click:
      Invoke init()
  - On keydown event:
      If pressed key is 'f' or 'F':
          Toggle flashlightOn state
          Call updateFlashlight()
      If pressed key is 'Escape':
          Toggle optionsMenu visibility
  - On audioElement ended:
      Loop background audio

Define init function:
  - Set currentNodeId to START_NODE_ID
  - Set isGameOver to false
  - Set flashlightOn to default state (true or false)
  - Play background audio
  - Hide playAgainButton and optionsMenu
  - Call updateFlashlight()
  - Call render()

Define render function:
  - If landingPage is visible, do not render game
  - Retrieve current story node from STORY_NODES using currentNodeId
  - Display story text in storyContainer
  - Clear choicesContainer
  - For each choice in current node:
      Create and append choice button with data-choice-id
  - If current node is an ending:
      Set isGameOver to true
      Display ending text in storyContainer
      Show playAgainButton

Define handleChoice(choiceId):
  - Find next node id from current story node’s choices using choiceId
  - Update currentNodeId to next node id
  - Check if next node is an ending:
      If yes, set isGameOver to true
  - Call render()

Define updateFlashlight function:
  - If flashlightOn is true:
      Show flashlightCursor and restrict page lighting to cursor area
  - Else:
      Hide flashlightCursor and show normal page lighting

Define audio playback function:
  - If audioPlaying is false:
      Play audioElement
      Set audioPlaying to true

Define options menu function:
  - On Escape key press:
      Toggle optionsMenu visibility
      Pause or resume audio if needed

Game flow:
  - On page load:
      Show landingPage with game title and startButton
  - Wait for user to click startButton to begin game
  - Initialize game state with init()
  - Render first story node with render()
  - Wait for user to click choice buttons
  - Update state variables based on choices
  - Render new story node or ending
  - Wait for user to click playAgainButton or press Escape to open optionsMenu
  - On pressing F, toggle flashlight effect on/off with updateFlashlight()
  - On restart, re-invoke init() to reset state variables and restart game

