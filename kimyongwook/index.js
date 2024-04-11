var leftBracketBtn = document.querySelector('#left_bracket');
var rightBracketBtn = document.querySelector('#right_bracket');
var perBtn = document.querySelector('#per');
var acBtn = document.querySelector('#ac');
var sevenBtn = document.querySelector('#seven');
var eightBtn = document.querySelector('#eight');
var nineBtn = document.querySelector('#nine');
var slashBtn = document.querySelector('#slash');
var fourBtn = document.querySelector('#four');
var fiveBtn = document.querySelector('#five');
var sixBtn = document.querySelector('#six');
var asteriskBtn = document.querySelector('#asterisk');
var oneBtn = document.querySelector('#one');
var twoBtn = document.querySelector('#two');
var threeBtn = document.querySelector('#three');
var minusBtn = document.querySelector('#minus');
var zeroBtn = document.querySelector('#zero');
var pointBtn = document.querySelector('#point');
var equalBtn = document.querySelector('#equal');
var plusBtn = document.querySelector('#plus');


function Calculate(value) {
    var input = document.querySelector("#input"); // id가 input인 요소를 찾아서 변수 input에 저장
    if (value === "AC") { 
        input.innerHTML = " ";
    } else if (value === "=") { 
        var current = input.innerHTML;
        var result = eval(current); 
        input.innerHTML = result; 
    } else {
        input.innerHTML += value; 
    }
}