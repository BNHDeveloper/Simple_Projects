
let currentInput = '';
let operator = '';
let firstValue = '';
let resultDisplayed = false;

function appendValue(value) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  document.getElementById('display').value += value;
  currentInput += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  currentInput = '';
  operator = '';
  firstValue = '';
}

function setOperator(op) {
  if (currentInput === '') return;
  operator = op;
  firstValue = currentInput;
  currentInput = '';
  document.getElementById('display').value += ' ' + op + ' ';
}

function calculate() {
  if (operator === '' || currentInput === '') return;

  const a = parseFloat(firstValue);
  const b = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'خطأ';
      break;
    default:
      result = 'خطأ';
  }

  document.getElementById('display').value = result;
  currentInput = result.toString();
  operator = '';
  resultDisplayed = true;
}
