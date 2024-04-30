const leftParenthesesButton = document.querySelector(".left-parentheses");
const rightParenthesesButton = document.querySelector(".right-parentheses");
const remainderButton = document.querySelector(".remainder-btn");
const resetButton = document.querySelector(".reset-btn");
const divideButton = document.querySelector(".divide-btn");
const multiplyButton = document.querySelector(".mul-btn");
const minusButton = document.querySelector(".minus-btn");
const decimalButton = document.querySelector(".dot-btn");
const resultButton = document.querySelector(".result-btn");
const plusButton = document.querySelector(".plus-btn");
const numberButton0 = document.querySelector(".number0");
const numberButton1 = document.querySelector(".number1");
const numberButton2 = document.querySelector(".number2");
const numberButton3 = document.querySelector(".number3");
const numberButton4 = document.querySelector(".number4");
const numberButton5 = document.querySelector(".number5");
const numberButton6 = document.querySelector(".number6");
const numberButton7 = document.querySelector(".number7");
const numberButton8 = document.querySelector(".number8");
const numberButton9 = document.querySelector(".number9");

const element = document.getElementById('result');
const display = document.getElementById('record');

let n = 0;

const writeNumber = (number) => {
    element.innerHTML += number;
}

const addOperator = (operator) => {
    element.innerHTML += operator;
}

const calculateResult = () => {
    display.innerHTML = eval(element.innerHTML);
}

const clearDisplay = () => {
    element.innerHTML = '';
    display.innerHTML = '';
}

const init = () => {
    numberButton0.addEventListener("click", () => writeNumber('0'));
    numberButton1.addEventListener("click", () => writeNumber('1'));
    numberButton2.addEventListener("click", () => writeNumber('2'));
    numberButton3.addEventListener("click", () => writeNumber('3'));
    numberButton4.addEventListener("click", () => writeNumber('4'));
    numberButton5.addEventListener("click", () => writeNumber('5'));
    numberButton6.addEventListener("click", () => writeNumber('6'));
    numberButton7.addEventListener("click", () => writeNumber('7'));
    numberButton8.addEventListener("click", () => writeNumber('8'));
    numberButton9.addEventListener("click", () => writeNumber('9'));
    plusButton.addEventListener("click", () => addOperator('+'));
    minusButton.addEventListener("click", () => addOperator('-'));
    multiplyButton.addEventListener("click", () => addOperator('*'));
    divideButton.addEventListener("click", () => addOperator('/'));
    remainderButton.addEventListener("click", () => addOperator('%'));
    leftParenthesesButton.addEventListener("click", () => addOperator('('));
    rightParenthesesButton.addEventListener("click", () => addOperator(')'));
    decimalButton.addEventListener("click", () => addOperator('.'));
    resultButton.addEventListener("click", calculateResult);
    resetButton.addEventListener("click", clearDisplay);
};

init();
