const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const allClearBtn = document.querySelector('.all-clear')
const equals = document.querySelector('.equals')
const previousText = document.querySelector('.previous')
const currentText = document.querySelector('.current')
const result = document.querySelector('.display')

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
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '÷':
            if (b === 0) {
                return "Error";
            } else {
                return divide(a, b);
            }
            break;
    }
}

function appendNumber(number) {

}

function chooseOperator(operator) {

}

function clear() {

}

function allClear() {

}

function evaluate() {

}

function display() {

}

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        appendNumber(number.textContent)
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        chooseOperator(operator.textContent)
    })
})

clearBtn.addEventListener('click', clear)

allClearBtn.addEventListener('click', allClear)

equals.addEventListener('click', evaluate)