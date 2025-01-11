const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType !== "ADD" ||
        calculationType !== "SUBTRACT" ||
        calculationType !== "MULTIPLY" ||
        calculationType !== "DIVIDE" ||
        !enteredNumber) {
        return;
    }


    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    } else {
        console.log("잘못입력하셨습니다.");
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// 덧셈
function add() {
    calculateResult("ADD");
}

// 뺄셈
function subtract() {
    calculateResult("SUBTRACT");
}

function multiply() {
    calculateResult("MULTIPLY")
}

function divide() {
    calculateResult("DIVIDE");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
