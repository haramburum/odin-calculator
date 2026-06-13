const display = document.querySelector(".calc__display");
const numBtns = document.querySelectorAll(".calc__numBtn");
const clearBtn = document.querySelector(".calc__clearBtn");
const equalsBtn = document.querySelector(".calc__eqBtn");
const operBtns = document.querySelectorAll(".calc__operBtn");
const dotBtn = document.querySelector(".calc__dotBtn");
const backBtn = document.querySelector(".calc_backBtn");

//starting vars
let num1 = "";
let num2 = "";
let operator = "";

//FLAGS
let isResultDisplayed = false;

//nums button listener
numBtns.forEach((numBtn) =>
  numBtn.addEventListener("click", (event) => {
    if (isResultDisplayed) {
      console.log("check");
      clearData();
      isResultDisplayed = false;
    }

    takeNums(event);
    console.log(num1, num2, operator);
  }),
);

//operators button listener
operBtns.forEach((operBtn) =>
  operBtn.addEventListener("click", (event) => {
    isResultDisplayed = false;

    if (num2 === "0" && operator === "/") {
      display.textContent = "^ERROR^";
      clearData();
      return;
    }

    if (num1 !== "" && num2 !== "") {
      calculateResult();
      operator = event.target.textContent;
      display.textContent = num1;
      num2 = "";
    } else {
      operator = event.target.textContent;
      console.log(num1, num2, operator);
    }
  }),
);

//equal button listener
equalsBtn.addEventListener("click", () => {
  calculateResult();
  console.log("click");
  isResultDisplayed = true;
});

//clear button listener
clearBtn.addEventListener("click", () => clearCalc());

//dot button
dotBtn.addEventListener("click", (event) => {
  let displayData = display.textContent;
  if (!displayData.includes(".") && displayData !== "") {
    takeNums(event);
  }
});

//back btn
backBtn.addEventListener("click", () => {
  if (isResultDisplayed || (num1 !== "" && num2 === "" && operator !== ""))
    return;

  let displayData = display.textContent;

  if (operator === "") {
    num1 = displayData.slice(0, displayData.length - 1);
    display.textContent = num1;
  } else {
    num2 = displayData.slice(0, displayData.length - 1);
    display.textContent = num2;
  }
  console.log(num1, num2, operator);
});

function calculateResult() {
  if ((num1 === "" && num2 === "") || operator === "") {
    return;
  }

  if (+num2 === 0) {
    display.textContent = "^ERROR^";
    clearData();
    return;
  }

  num1 = (
    Math.round(operate(operator, +num1, +num2) * 1000000000) / 1000000000
  ).toString();

  num2 = "";
  operator = "";

  display.textContent = num1;
  console.log(num1, num2, operator);
}

function takeNums(event) {
  if (
    (operator === "" && num1.length >= 17) ||
    (operator !== "" && num2.length >= 17)
  ) {
    return;
  }

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
