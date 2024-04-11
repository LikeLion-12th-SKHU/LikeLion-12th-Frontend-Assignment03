const leftBracketBtn = document.querySelector('#left_bracket');
const rightBracketBtn = document.querySelector('#right_bracket');
const perBtn = document.querySelector('#per');
const acBtn = document.querySelector('#ac');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const slashBtn = document.querySelector('#slash');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const asteriskBtn = document.querySelector('#asterisk');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const minusBtn = document.querySelector('#minus');
const zeroBtn = document.querySelector('#zero');
const pointBtn = document.querySelector('#point');
const equalBtn = document.querySelector('#equal');
const plusBtn = document.querySelector('#plus');


function Calculate(value) {
    var display = document.querySelector("#input");
    if (value === "AC") { 
        display.innerHTML = " ";
    } else if (value === "=") { 
        const current = display.innerHTML;
        const result = eval(current); 
        display.innerHTML = result; 
    } else {
        display.innerHTML += value; 
    }
}