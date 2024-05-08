// Mathematical operations
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "÷":
      return a / b;
  }
}

// DOM elements
const calculator = document.getElementById("calculator");
const numberButtons = document.querySelectorAll(".numberButton");
const mathButtons = document.querySelectorAll(".mathButton");
const display = document.querySelector(".display");
const displayLast = document.querySelector(".displayLast");
const clearButton = document.querySelector(".clearButton");
const deleteButton = document.querySelector(".deleteButton");
const operateButton = document.querySelector(".operateButton");
const comaButton = document.querySelector(".comaButton");

let firstNumber = 0;
let secondNumber = 0;
let currentOperation = "";
let isNewNumber = true;

// Resets calculator display and state
function reset() {
  firstNumber = 0;
  secondNumber = 0;
  currentOperation = "";
  display.textContent = "0";
  displayLast.textContent = "";
  isNewNumber = true;
}

// Updates the display when a number or dot is clicked
function updateDisplay(value) {
  if (isNewNumber) {
    display.textContent =
      value === "." && !display.textContent.includes(".") ? "0." : value;
    isNewNumber = false;
  } else {
    if (!(value === "." && display.textContent.includes("."))) {
      display.textContent += value;
    }
  }
}

// Set up event listeners for number and dot buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => updateDisplay(button.textContent));
});

comaButton.addEventListener("click", () => updateDisplay("."));

// Operation button event
mathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isNewNumber) {
      firstNumber = parseFloat(display.textContent);
      currentOperation = button.textContent;
      displayLast.textContent = `${display.textContent} ${currentOperation}`;
      isNewNumber = true;
    }
  });
});

// Calculate the result
operateButton.addEventListener("click", () => {
  if (currentOperation && !isNewNumber) {
    secondNumber = parseFloat(display.textContent);
    const result = operate(currentOperation, firstNumber, secondNumber);
    display.textContent = result;
    displayLast.textContent = `${firstNumber} ${currentOperation} ${secondNumber} = ${result}`;
    isNewNumber = true;
  }
});

// Clear and delete functionalities
clearButton.addEventListener("click", reset);

deleteButton.addEventListener("click", () => {
  if (!isNewNumber) {
    display.textContent = display.textContent.slice(0, -1) || "0";
    if (display.textContent === "0") isNewNumber = true;
  }
});

// Styling transformations
calculator.addEventListener("click", () => {
  calculator.style.transform = "translate3d(0px, 0px, -250px)";
  calculator.style.cursor = "default";
});
