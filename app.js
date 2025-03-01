/*-------------------------------- Constants --------------------------------*/

const numButtons = document.querySelectorAll('.button.number');
const opButtons = document.querySelectorAll('.button.operator');
const eqButton = document.querySelector('.button.equals');
const clearButton = document.querySelector('.button.operator.clear');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let firstNum = '';
let secNum = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach((button) => {
  button.addEventListener('click', handleNumClick);
});

opButtons.forEach((button) => {
  button.addEventListener('click', handleOpClick);
});

eqButton.addEventListener('click', handleEqClick);

clearButton.addEventListener('click', handleClearClick);

/*-------------------------------- Functions --------------------------------*/
