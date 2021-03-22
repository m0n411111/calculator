const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const allClearBtn = document.querySelector('.all-clear')
const equals = document.querySelector('.equals')
const decimal = document.querySelector('.decimal')
const display = document.querySelector('.display')

let firstOperand = ""
let secondOperand = ""
let currentOperator = null
let clearDisplay = false

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            if (b === 0) {
                return "Error";
            } else {
                return divide(a, b);
            }
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || clearDisplay)
        resetDisplay();
    display.textContent += number;
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
        alert('Error');
        allClear;
        return;
    }
    secondOperand = display.textContent;
    display.textContent = roundResult(operate(currentOperator, firstOperand, secondOperand));
    currentOperator = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

numbers.forEach((button) =>
    button.addEventListener('click', () =>
        appendNumber(button.textContent))
);

operators.forEach((button) =>
    button.addEventListener('click', () =>
        chooseOperator(button.textContent))
);

clearBtn.addEventListener('click', clear)
allClearBtn.addEventListener('click', allClear)
equals.addEventListener('click', evaluate)
decimal.addEventListener('click', appendDecimal)