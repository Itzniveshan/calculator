let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("result").value = currentInput;
}

function clearScreen() {
  currentInput = "";
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("result").value = currentInput;
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
