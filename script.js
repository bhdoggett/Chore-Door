let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');



let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return true;
  }
  else {
    return false;
  };
}

function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  }
}

function gameOver(status) {
  if (status === 'win') {
    startButton.textContent = 'You Win! Play again?'
  } else {
    startButton.textContent = 'Game Over! Play again?'
  }
  currentlyPlaying = false;
}

function playDoor(door) {
  numClosedDoors -= 1
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door) === true) {
    gameOver();
  }
}

function randomChoreDoorGenerator() {
  // Create an array of the possible door paths
  let doorPaths = [botDoorPath, beachDoorPath, spaceDoorPath];

  // Randomly select and assign each door image
  let choreDoor = Math.floor(Math.random() * doorPaths.length);  // Randomly select for door 1
  openDoor1 = doorPaths[choreDoor];  // Assign the image to door 1
  doorPaths.splice(choreDoor, 1);  // Remove the assigned image from the array

  choreDoor = Math.floor(Math.random() * doorPaths.length);  // Randomly select for door 2 from remaining options
  openDoor2 = doorPaths[choreDoor];  // Assign the image to door 2
  doorPaths.splice(choreDoor, 1);  // Remove the assigned image from the array

  openDoor3 = doorPaths[0];  // The remaining image will be for door 3
}


function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.textContent = 'Good Luck!';
  randomChoreDoorGenerator();
}


doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}


startRound();
