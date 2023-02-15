const RED = 'red';
const GREEN = 'green';
const YELLOW = 'yellow';

let currentState = RED;
let timerId;

function handleButtonClick(buttonColor) {
  switch (buttonColor) {
    case RED:
      if (currentState === GREEN) {
        clearTimeout(timerId);
      }
      currentState = RED;
      updateButtonColors();
      startTimer(20, GREEN);
      break;
    case GREEN:
      if (currentState === RED) {
        startTimer(15, YELLOW);
      }
      currentState = GREEN;
      updateButtonColors();
      startTimer(15, YELLOW);
      break;
    case YELLOW:
      if (currentState === GREEN) {
        startTimer(5, RED);
      }
      currentState = YELLOW;
      updateButtonColors();
      startTimer(5, RED);
      break;
    default:
      break;
  }
}

function startTimer(seconds, nextState) {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    currentState = nextState;
    updateButtonColors();
  }, seconds * 1000);
}

function updateButtonColors() {
  const redButton = document.getElementById('red');
  const greenButton = document.getElementById('green');
  const yellowButton = document.getElementById('yellow');
  switch (currentState) {
    case RED:
      redButton.style.backgroundColor = RED;
      greenButton.style.backgroundColor = 'black';
      yellowButton.style.backgroundColor = 'black';
      break;
    case GREEN:
      redButton.style.backgroundColor = 'black';
      greenButton.style.backgroundColor = GREEN;
      yellowButton.style.backgroundColor = 'black';
      break;
    case YELLOW:
      redButton.style.backgroundColor = 'black';
      greenButton.style.backgroundColor = 'black';
      yellowButton.style.backgroundColor = YELLOW;
      break;
    default:
      break;
  }
}

updateButtonColors();
