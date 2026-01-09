let current = "";
let operator = "";
let firstOperand = null;
let resetNext = false;
let memory = 0;
let history = [];

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

function appendNumber(num) {
  if (resetNext) {
    current = "";
    resetNext = false;
  }
  if (num === "." && current.includes(".")) return;
  current += num;
  updateDisplay(current);
}

function setOperation(op) {
  if (current === "") return;

  if (firstOperand === null) {
    firstOperand = parseFloat(current);
  } else if (operator) {
    firstOperand = operate(firstOperand, parseFloat(current), operator);
    updateDisplay(firstOperand);
  }

  operator = op;
  current = "";
}

function calculateResult() {
  if (!operator || current === "") return;

  const result = operate(firstOperand, parseFloat(current), operator);
  addToHistory(`${firstOperand} ${operator} ${current} = ${result}`);
  updateDisplay(result);

  firstOperand = result;
  operator = "";
  current = "";
  resetNext = true;
}

function clearDisplay() {
  current = "";
  operator = "";
  firstOperand = null;
  updateDisplay("");
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay(current);
}

function operate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    case "%": return (a * b) / 100;
    default: return b;
  }
}

// Advanced functions
function squareRoot() {
  if (current !== "") {
    current = Math.sqrt(parseFloat(current)).toString();
    updateDisplay(current);
  }
}

function square() {
  if (current !== "") {
    current = Math.pow(parseFloat(current), 2).toString();
    updateDisplay(current);
  }
}

function inverse() {
  if (current !== "") {
    current = (1 / parseFloat(current)).toString();
    updateDisplay(current);
  }
}

// Memory functions
function memoryAdd() {
  if (current !== "") memory += parseFloat(current);
}

function memorySubtract() {
  if (current !== "") memory -= parseFloat(current);
}

function memoryRecall() {
  current = memory.toString();
  updateDisplay(current);
}

function memoryClear() {
  memory = 0;
}

// History
function addToHistory(entry) {
  history.push(entry);
  let historyBox = document.getElementById("history");
  historyBox.innerHTML = history.slice(-5).reverse().join("<br>");
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) appendNumber(e.key);
  if (e.key === ".") appendNumber(".");
  if (["+","-","*","/"].includes(e.key)) setOperation(e.key);
  if (e.key === "Enter" || e.key === "=") calculateResult();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clearDisplay();

  // shortcuts
  if (e.key.toLowerCase() === "s") squareRoot();
  if (e.key.toLowerCase() === "q") square();
  if (e.key.toLowerCase() === "i") inverse();
  if (e.key.toLowerCase() === "p") setOperation("%");
});
