const startGameBtn = document.getElementById('start-game-btn');

// 제어 구조 모듈에서 만들어본 패턴 : if 문에서 사용자가 오타를 입력을 하면 안되니깐
const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
    const section = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();

    if (section !== ROCK &&
        section !== PAPER &&
        section !== SCISSORS
    ) {
        alert(`유효한 값이 아닙니다. ${DEFAULT_USER_CHOICE} `);
        return DEFAULT_USER_CHOICE;
    }
    return section;
};

// 상수에 함수를 저장하는 함수로 시작.

startGameBtn.addEventListener("click", function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("게임 시작.");
    const gameStart = getPlayerChoice();
    console.log("진짜 시작 : ", gameStart);
});