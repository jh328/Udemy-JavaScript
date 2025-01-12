const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

const RESCLUT_DRAW = "DRAW";
const RESCLUT_PLAYER_WINS = "PLAYER_WINS";
const RESCLUT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER}, ${SCISSORS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`유효하지 않습니다.${ROCK}`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESCLUT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === SCISSORS && pChoice === ROCK) ||
    (cChoice === PAPER && pChoice === SCISSORS)
  ) {
    return RESCLUT_PLAYER_WINS;
  } else {
    return RESCLUT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("게임 시작~~");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice(); // 왜 함수만 호출 하면 되는데 왜 굳이 상수를 만들었는지 이해가 안됨.
  console.log("컴퓨터 뭐 냈는지 궁금함. ", computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  alert(winner);
});
