const startGameBtn = document.getElementById("start-game-btn");

// 제어 구조 모듈에서 만들어본 패턴 : if 문에서 사용자가 오타를 입력을 하면 안되니깐
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getPlayerChoice = function () {
  const section = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();

  if (section !== ROCK && section !== PAPER && section !== SCISSORS) {
    alert(`유효한 값이 아닙니다. ${DEFAULT_USER_CHOICE} `);
    return DEFAULT_USER_CHOICE;
  }
  return section;
};
// 상수에 함수를 저장하는 함수로 시작.

const getWinner = function (comChoice, playerChoice) {
  if (comChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (comChoice === ROCK && playerChoice === PAPER) ||
    (comChoice === PAPER && playerChoice === SCISSORS) ||
    (comChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

const getWinner2 = (comChoice, playerChoice) =>
  comChoice === playerChoice
    ? RESULT_DRAW
    : (comChoice === ROCK && playerChoice === PAPER) ||
      (comChoice === PAPER && playerChoice === SCISSORS) ||
      (comChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log("승자 : ", winner);
});
