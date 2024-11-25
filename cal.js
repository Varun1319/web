const display = document.getElementById("display");

function ToDisplay(input) {
  display.value += input;
}
function cleardisplay() {
  display.value = "";
}
function calculate() {
  display.value = eval(display.value);
}

const root = document.getElementById("sqrroot");
function sqrroot() {
  display.value = Math.sqrt(display.value);
}

const square = document.getElementById("sqr");
function sqr() {
  display.value = display.value * display.value;
}
