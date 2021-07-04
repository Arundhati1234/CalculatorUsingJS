const userInput = document.getElementById('inputNumber');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');

const currentCalculationOutput = document.getElementById('currentCalculation');
const currentResultOutput = document.getElementById('currentResult');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

