const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".clear")
const allClearBtn = document.querySelector(".all-clear")
const equals = document.querySelector(".equals")
const previousText = document.querySelector(".previous")
const currentText = document.querySelector(".current")

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
    if (b !== 0) {
        return a / b;
    } else {
        return "Error";
    }
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "÷":
            return divide(a, b);
            break;
    }
}

function appendNumber() {

}

function chooseOperator() {

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
    number.addEventListener("click", () => {
        appendNumber(number.textContent)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        chooseOperator(operator.textContent)
    })
})

clearBtn.addEventListener("click", clear)

allClearBtn.addEventListener("click", allClear)

equals.addEventListener("click", evaluate)