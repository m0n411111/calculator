const operands = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const allClearBtn = document.querySelector('.all-clear');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const display = document.querySelector('.display');

let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let clearDisplay = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}

function appendNumber(num) {
    if (display.textContent === '0' || clearDisplay)
        resetDisplay();
    display.textContent += num;
}

function appendDecimal() {
    if (clearDisplay)
        resetDisplay();
    if (display.textContent === '')
        display.textContent = '0';
    if (display.textContent.includes('.'))
        return;
    display.textContent += '.';
}

function chooseOperator(operator) {
    if (currentOperator !== null)
        evaluate();

    firstOperand = display.textContent;
    currentOperator = operator;
    clearDisplay = true;
}

function resetDisplay() {
    display.textContent = "";
    clearDisplay = false;
}

function clear() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

function allClear() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function evaluate() {
    if (currentOperator === null || clearDisplay) return;
    if (currentOperator === '÷' && display.textContent === '0') {
        display.textContent = "Error";
        allClear;
        return;
    }
    secondOperand = display.textContent;
    display.textContent = Math.round(operate(currentOperator, firstOperand, secondOperand) * 100) / 100;
    currentOperator = null;
}

operands.forEach((number) => {
    number.addEventListener('click', () => {
        appendNumber(number.textContent) 
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        chooseOperator(operator.textContent) 
    })
});

clearBtn.addEventListener('click', clear);
allClearBtn.addEventListener('click', allClear);
equals.addEventListener('click', evaluate);
decimal.addEventListener('click', appendDecimal);
