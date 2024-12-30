const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${operator} ${resultBeforeCalc} + ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevReesult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevReesult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log("logEntries.push : ", logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

// 뺄셈
function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}
// 곱셈
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
//나눗셈
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
