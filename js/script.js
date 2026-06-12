const display = document.querySelector(".calc__display");
const numBtns = document.querySelectorAll(".calc__numBtn");
const clearBtn = document.querySelector(".calc__clearBtn");
const equalsBtn = document.querySelector(".calc__eqBtn");
const operBtns = document.querySelectorAll(".calc__operBtn");

//starting vars
let num1 = "";
let num2 = "";
let operator = "";

//nums button listener
numBtns.forEach((numBtn) =>
  numBtn.addEventListener("click", (event) => {
    if (operator === "") {
      takeNum1(event);
    } else {
      takeNum2(event);
    }
    console.log(num1, num2, operator);
  }),
);

// operators button listener
operBtns.forEach((operBtn) =>
  operBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "") {
      display.textContent = operate(operator, +num1, +num2);
      num1 = display.textContent;
      display.textContent = '';
      num2 = '';
      operator = operBtn.textContent;
    } else {
      operator = operBtn.textContent;
      clearDisplay();
    }
    console.log(num1, num2, operator);
  }),
);

//equal button listener
equalsBtn.addEventListener("click", () => {
  display.textContent = operate(operator, +num1, +num2);
});

//clear button listener
clearBtn.addEventListener("click", () => clearCalc());

function takeNum1(event) {
  display.textContent += event.target.textContent;
  num1 = display.textContent;
}

function takeNum2(event) {
  display.textContent += event.target.textContent;
  num2 = display.textContent;
}

function clearCalc() {
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = "";
}

function clearDisplay() {
  display.textContent = "";
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
