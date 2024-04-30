// 클릭 이벤트 리스너 추가 
document.getElementById('buttons-container').addEventListener('click', function(event) {
   // 클릭된 요소를 clickedButton 변수에 대입
    const clickedButton = event.target;
    // id가 "display"인 요소를 찾아서 사용자가 입력한 수식 가져옴
    const display = document.querySelector('#display');

    // 클릭된 요소가 자식 클래스인 경우
    if(clickedButton.tagName === 'BUTTON') {
        // 클릭된 요소의 텍스트 내용을 buttonValue 변수에 대입
        const buttonValue = clickedButton.textContent;
        
        if(buttonValue === 'AC') {        // 버튼의 텍스트 내용이 AC인 경우
            // 초기화 함수 호출
            clearDisplay();
        } else if(buttonValue === '=') {  // 버튼의 텍스트 내용이 =인 경우
            // 계산하는 함수 호출
            calculateResult();
        } else {                          // 그밖의 경우
            appendToDisplay(buttonValue);  // 입력값 추가
        }
    }
});

// 입력된 값 추가
function appendToDisplay(value) {
    // id가 "display"인 요소를 찾아서 사용자가 입력한 수식 가져옴
    const display = document.querySelector('#display');
    // display에 입력받은 값 추가
    display.value += value;
}

// AC 버튼 클릭 시 초기화
function clearDisplay() {
    // id가 "display"인 요소를 찾아서 사용자가 입력한 수식 가져옴
    const display = document.querySelector('#display');
    // display에 빈 값 대입
    display.value = '';
}

// = 버튼을 클릭 시 입력된 값 계산 (힌트 : eval함수)
function calculateResult() {
    // id가 "display"인 요소를 찾아서 사용자가 입력한 수식 가져옴
    const expression = document.querySelector('#display').value;
    // eval함수 활용해 전달된 수식 계산 
    const result = eval(expression);
    // 디스플레이 요소 다시 선택
    const display = document.querySelector('#display');
    // 계산된 결과(result)를 display에 대입
    display.value = result;
}
