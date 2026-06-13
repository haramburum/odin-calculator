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
    if (num1 !== "" && num2 !== "" && operator !== "") {
      clearData();
    } else {
      takeNums(event);
      console.log(num1, num2, operator);
    }
  }),
);

// operators button listener
operBtns.forEach((operBtn) =>
  operBtn.addEventListener("click", (event) => {
    if (num1 !== "" && num2 !== "") {
      calculateResult();
      operator = event.target.textContent;
      num1 = display.textContent;
      num2 = "";
      console.log(num1, num2, operator);
    } else {
      operator = event.target.textContent;
      console.log(num1, num2, operator);
    }
  }),
);

//equal button listener
equalsBtn.addEventListener("click", () => calculateResult());

//clear button listener
clearBtn.addEventListener("click", () => clearCalc());

function calculateResult() {
  if ((num1 === "" && num2 === "") || operator === "") {
    return;
  }

  if (+num2 === 0) {
    display.textContent = "^ERROR^";
    clearData();
    return;
  }

  let result =
    Math.round(operate(operator, +num1, +num2) * 1000000000) / 1000000000;
  display.textContent = result;
  console.log(num1, num2, operator);
  return result;
}

function takeNums(event) {
  if (operator === "") {
    num1 += event.target.textContent;
    display.textContent = num1;
  } else {
    num2 += event.target.textContent;
    display.textContent = num2;
  }
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

function clearData() {
  num1 = "";
  num2 = "";
  operator = "";
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
