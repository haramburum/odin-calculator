const display = document.querySelector(".calc__display");
const numBtns = document.querySelectorAll(".calc__numBtn");
const clearBtn = document.querySelector(".calc__clearBtn");
const equalsBtn = document.querySelector(".calc__eqBtn");
const operBtns = document.querySelectorAll(".calc__operBtn");

let num1 = '';
let num2 = '';
let operator = '';

numBtns.forEach((numBtn) => numBtn.addEventListener("click", () => {
  if (operator === '') {
    takeNum1(numBtn);
  } else {
    takeNum2(numBtn);
  }
  console.log(num1, num2, operator);
}));

operBtns.forEach((operBtn) =>
  operBtn.addEventListener("click", () => {
    operator = operBtn.textContent;
    clearDisplay();
  }),
);

equalsBtn.addEventListener('click', () => {
  display.textContent = operate(operator, +num1, +num2);
});

clearBtn.addEventListener("click", () => clearCalc());

function takeNum1(numBtn) {
  display.textContent += numBtn.textContent;
  num1 = display.textContent;
}

function takeNum2(numBtn) {
  display.textContent += numBtn.textContent;
  num2 = display.textContent;
}

function clearCalc() {
  num1 = '';
  num2 = '';
  operator = '';
  display.textContent = "";
}

function clearDisplay() {
  display.textContent = '';
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return devide(num1, num2);
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function devide(x, y) {
  return x / y;
}
