const calculator = document.querySelector("#calculator");
const numberOfFields = 20;

function createButtons() {
  for (let i = 0; i < numberOfFields; i++) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.id = `field-${i}`;
    const values = [
      "",
      "AC",
      "+/-",
      "%",
      "÷",
      7,
      8,
      9,
      "×",
      4,
      5,
      6,
      "-",
      1,
      2,
      3,
      "+",
      0,
      ",",
      "=",
    ];
    field.append(values[i]);
    calculator.appendChild(field);
    field.onclick = checkValue;
  }
}

// function someFunc() {
//   console.log("hey");
// }

function checkValue() {
  if (
    this.id === "field-5" ||
    this.id === "field-6" ||
    this.id === "field-7" ||
    this.id === "field-9" ||
    this.id === "field-10" ||
    this.id === "field-11" ||
    this.id === "field-13" ||
    this.id === "field-14" ||
    this.id === "field-15" ||
    this.id === "field-17"
  ) {
    addDigits();
  } else if (this.id === "field-1") {
    eraseInput();
  } else if (this.id === "field-2") {
    changeSign();
  } else if (this.id === "field-3") {
    countPercent();
  } else if (this.id === "field-4") {
    divideBy();
  } else if (this.id === "field-8") {
    multiplyBy();
  } else if (this.id === "field-12") {
    subtract();
  } else if (this.id === "field-16") {
    add();
  } else if (this.id === "field-18") {
    addPoint();
  } else if (this.id === "field-19") {
    countValue();
  }
}

function addDigits() {
  console.log("it's a number");
}

function eraseInput() {
  console.log("have to erase");
}

function multiplyBy() {
  console.log("multiply");
}

function divideBy() {
  console.log("divide");
}

function subtract() {
  console.log("subtract");
}

function add() {
  console.log("add");
}

function countValue() {
  console.log("equals");
}

function countPercent() {
  console.log("percentage");
}

function changeSign() {
  console.log("-x");
}

function addPoint() {
  console.log("add point");
}

createButtons();
checkValue();
