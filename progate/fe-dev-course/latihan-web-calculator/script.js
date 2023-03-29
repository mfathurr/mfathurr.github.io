// ============================ (Update Screen) ===========================
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};
// ========================================================================

// ============================ (Tombol 1-9,0) ============================
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};
// ========================================================================

// ============================ (Tombol +-/*) =============================
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};
// ========================================================================

// ============================ (Tombol =) ================================
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";

  switch (calculationOperator) {
    case "+":
      result = Number(prevNumber) + Number(currentNumber);
      break;
    case "-":
      result = Number(prevNumber) - Number(currentNumber);
      break;
    case "*":
      result = Number(prevNumber) * Number(currentNumber);
      break;
    case "/":
      result = Number(prevNumber) / Number(currentNumber);
      break;

    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};
// ========================================================================

// ============================ (Tombol .) ================================
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", () => {});
// ========================================================================

// ============================ (Tombol AC) ===============================
const allClear = document.querySelector(".all-clear");

allClear.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};
// ========================================================================
