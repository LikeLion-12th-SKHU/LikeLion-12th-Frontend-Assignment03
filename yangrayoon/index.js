/* 
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let percentage = document.querySelector("#percentage");
let reset = document.querySelector("#reset");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let slash = document.querySelector("#slash");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let star = document.querySelector("#multi");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let minus = document.querySelector("#minus");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");
let plus = document.querySelector("#plus");
*/

let monitor = document.querySelector(".m2");
let m2 = document.querySelector(".m1");

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function(){
        let value = button.value;

        if(value === "="){
            let r = eval(monitor.innerHTML);
            m2.innerHTML = r;
            }
        else if(value === "AC"){
            monitor.innerHTML = ''
            m2.innerHTML = ''
        }
        else{
            monitor.innerHTML += value;
        }
    },false)
}) 



