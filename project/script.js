const calculator = document.querySelector("#calculator");

const displayField = document.querySelector("#display");
displayField.textContent = "0";

let values = [];

const fieldFunctions = {
  erase: eraseInput,
  changeSign: changeSign,
  // percent: countPercent,
  seven: addDigits,
  eight: addDigits,
  nine: addDigits,
  four: addDigits,
  five: addDigits,
  six: addDigits,
  subtract: subtract,
  one: addDigits,
  two: addDigits,
  three: addDigits,
  add: add,
  zero: addDigits,
  floatingNum: addPoint,
  equals: countValue,
};

function findButtons() {
  let fields = document.querySelectorAll(".field");
  fields.forEach((field) => {
    const fieldFunction = fieldFunctions[field.id];

    // field.addEventListener("keydown", highlightField);
    // field.addEventListener("keyup", unhighlightField); //doesnt work

    if (fieldFunction) {
      field.addEventListener("click", checkValue);
    }
  });
}

function listenForNumber() {
  document.addEventListener("keydown", function (event) {
    const keyValue = event.key;
    if (
      !isNaN(keyValue) &&
      parseInt(keyValue) >= 0 &&
      parseInt(keyValue) <= 9
    ) {
      if (displayField.textContent === "0") {
        displayField.textContent = keyValue;
      } else {
        displayField.textContent += keyValue;
      }
    }
  });
}

function listenForDelete() {
  document.addEventListener("keydown", function (event) {
    const keyValue = event.key;
    if (keyValue === "Backspace" || keyValue === "Delete") {
      displayField.textContent = displayField.textContent.slice(0, -1);
    }
  });
}

function checkValue() {
  if (
    this.id === "seven" ||
    this.id === "eight" ||
    this.id === "nine" ||
    this.id === "four" ||
    this.id === "five" ||
    this.id === "six" ||
    this.id === "one" ||
    this.id === "two" ||
    this.id === "three" ||
    this.id === "zero"
  ) {
    const value = document.getElementById(this.id).textContent;
    addDigits(value);
  } else if (this.id === "erase") {
    eraseInput();
  } else if (this.id === "changeSign") {
    changeSign();
  }
  // else if (this.id === "percent") {
  //   countPercent();
  // }
  else if (this.id === "floatingNum") {
    addPoint();
  } else if (this.id === "equals") {
    countValue();
  }
}

function addDigits(digit) {
  if (displayField.textContent === "0") {
    displayField.textContent = digit;
  } else {
    displayField.textContent += digit;
  }
}

function eraseInput() {
  displayField.textContent = "";
  values = [];
}

document.getElementById("divide").addEventListener("click", () => {
  if (displayField.textContent !== "") {
    values.push(displayField.textContent);
    displayField.textContent = "";
    if (values[values.length - 1] !== "/") {
      values.push("/");
    }
    console.log(values);
  } else if (displayField.textContent === "") {
    console.log("no value");
  }
});

document.getElementById("multiply").addEventListener("click", () => {
  if (displayField.textContent !== "") {
    values.push(displayField.textContent);
    displayField.textContent = "";
    if (values[values.length - 1] !== "*") {
      values.push("*");
    }
    console.log(values);
  } else if (displayField.textContent === "") {
    console.log("no value");
  }
});

document.getElementById("subtract").addEventListener("click", () => {
  if (displayField.textContent !== "") {
    values.push(displayField.textContent);
    displayField.textContent = "";
    if (values[values.length - 1] !== "-") {
      values.push("-");
    }
    console.log(values);
  } else if (displayField.textContent === "") {
    console.log("no value");
  }
});

document.getElementById("add").addEventListener("click", () => {
  if (displayField.textContent !== "") {
    values.push(displayField.textContent);
    displayField.textContent = "";
    if (values[values.length - 1] !== "+") {
      values.push("+");
    }
    console.log(values);
  } else if (displayField.textContent === "") {
    console.log("no value");
  }
});

document.getElementById("percent").addEventListener("click", () => {
  if (displayField.textContent !== "") {
    values.push(displayField.textContent);
    displayField.textContent = "";
    if (values[values.length - 1] !== "%") {
      values.push("%");
    }
    console.log(values);
  } else if (displayField.textContent === "") {
    console.log("no value");
  }
});

function countValue() {
  values.push(displayField.textContent);
  let expression = values.join("");
  let result = new Function("return " + expression)();
  displayField.textContent = result;
}

function changeSign() {
  displayField.textContent = -displayField.textContent;
}

function addPoint() {
  console.log("add point");
}

function listenForEnter() {
  document.addEventListener("keydown", function (event) {
    const keyValue = event.key;
    if (keyValue === "Enter") {
      displayField.textContent = result;
    }
  });
}

// function highlightField() {
//   const selectedField = document.getElementById(this.id);
//   selectedField.classList.add("highlight");
//   console.log("yes");
// }

// function unhighlightField() {
//   // const selectedField = document.getElementById(this.id);
//   this.classList.remove("highlight");
// }

listenForNumber();
listenForDelete();
findButtons();
// countValues();
