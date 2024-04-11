const openBracket= document.querySelector(".option1");
const closeBracket = document.querySelector(".option2");
const remainButton = document.querySelector(".option3");
const resetButton = document.querySelector(".option4");
const number07 = document.querySelector(".option5");
const number08 = document.querySelector(".option6");
const number09 = document.querySelector(".option7");
const divButton = document.querySelector(".option8");
const number04 = document.querySelector(".option9");
const number05 = document.querySelector(".option10");
const number06 = document.querySelector(".option11");
const mulButton = document.querySelector(".option12");
const number01 = document.querySelector(".option13");
const number02 = document.querySelector(".option14");
const number03 = document.querySelector(".option15");
const minusButton = document.querySelector(".option16");
const number00 = document.querySelector(".option17");
const CommaButton = document.querySelector(".option18");
const ResultButton = document.querySelector(".option19");
const PlusButton = document.querySelector(".option20");
//() 안에 입력된 문서 내의 내용을 찾아서 각각의 변수들에 변환해준다.⭐️
    //ex) <html><div class ="mubin">안녕하세요</div></html>⭐️

    //    const helloMubin = document.querySelector(".mubin");⭐️
    //    mubin 클래스를 찾아서 그 안에 있는 값(안녕하세요)을 helloMubin에 반환해준다.⭐️
    //    대충 이런식으로 이해하고 있는데 피드백 부탁드려요!!!
    //    버튼 하나하나에 값을 지정해야 하기에 하나하나 설정했습니다


const display= document.getElementById('cord');
const element = document.getElementById('result');
//getElementById 는 id 속성을 가진 요소를 검색하고 그 요소를 반환해준다⭐️
//html 문서에서 id 속성을 지닌 cord, result 를 찾아서 display 나 element에 있는 값을
//반환해주겠죠?
// id로 document 를 검색하는데 요소를 찾지 못한 경우 null 을 리턴합니다!! 

//숫자
const Number0 = () => {
    element.innerHTML += number00.innerHTML;
    //html에 원하는 요소 값을 변경하기 위한 innerHTML⭐️
    //실행하면 number00에 들어가 있는 0값을 element(HTML 값)에 더해준다( += )
    //       element.innerHTML += number00.innerHTML;
    // =>    element.innerHTML = element.innerHTML + number00.innerHTML;
    //아래도 똑같이 동작된다.
}
const Number1 = () => {
    element.innerHTML += number01.innerHTML;
}
const Number2 = () => {
    element.innerHTML += number02.innerHTML;
}
const Number3 = () => {
    element.innerHTML += number03.innerHTML;
}
const Number4 = () => {
    element.innerHTML += number04.innerHTML;
}
const Number5 = () => {
    element.innerHTML += number05.innerHTML;
}
const Number6 = () => {
    element.innerHTML += number06.innerHTML;
}
const Number7 = () => {
    element.innerHTML += number07.innerHTML;
}
const Number8 = () => {
    element.innerHTML += number08.innerHTML;
}
const Number9 = () => {
    element.innerHTML += number09.innerHTML;
}

//연산자들
const plus = () => {
    element.innerHTML += PlusButton.innerHTML;
}
const minus = () => {
    element.innerHTML += minusButton.innerHTML;
}
const divide = () => {
    element.innerHTML += divButton.innerHTML;
}
const multiplication = () => {
    element.innerHTML += mulButton.innerHTML;
}
const open = () => {
    element.innerHTML += openBracket.innerHTML;
}
const close = () => {
    element.innerHTML += closeBracket.innerHTML;
}
const comma = () => {
    element.innerHTML += CommaButton.innerHTML;
}
const remain = () => {
    element.innerHTML += remainButton.innerHTML;
}
const reset = () => {
    element.innerHTML = ' ';
    display.innerHTML = ' ';
}
const result = () => {
    //eval('문자열');
    //해당 문자열을 자바스크립트 코드로 인식하여 변경한다
    //다만 인자가 문자열이 아닐 경우 인자 그대로를 반환한다,

    //위 코드들에서 element.innerHTML에 값(문자)들을 추가해주고 
    //eval() 함수로 계산한다. 
    //그리고 HTML에 있는 display id 에다가 넣고 화면에 표시된다
    display.innerHTML = eval(element.innerHTML);
}
const set = () => {
    //이벤트를 처리하기 위한 가장 기본적인 메서드 addEventListener()
    // 'click' 을 했을 때 실행된다.
    //이벤트 종류 : click , mouseover, keydown 등

    //버튼을 클릭하면 addEventListener()가 실행되고
    //Number0 값이 number00에 들어간다
    //나머지도 똑같이 작동한다.
    number00.addEventListener("click", Number0);
    number01.addEventListener("click", Number1);
    number02.addEventListener("click", Number2);
    number03.addEventListener("click", Number3);
    number04.addEventListener("click", Number4);
    number05.addEventListener("click", Number5);
    number06.addEventListener("click", Number6);
    number07.addEventListener("click", Number7);
    number08.addEventListener("click", Number8);
    number09.addEventListener("click", Number9);
    PlusButton.addEventListener("click", plus);
    minusButton.addEventListener("click", minus);
    divButton.addEventListener("click", divide);
    mulButton.addEventListener("click", multiplication);
    openBracket.addEventListener("click", open);
    closeBracket.addEventListener("click", close);
    remainButton.addEventListener("click", remain);
    resetButton.addEventListener("click", reset);
    ResultButton.addEventListener("click",result);
    CommaButton.addEventListener("click", comma);
}
set();


