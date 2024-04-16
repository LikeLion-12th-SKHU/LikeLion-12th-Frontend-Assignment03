document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display'); 

    document.querySelectorAll('.container button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent; // 버튼의 텍스트 콘텐츠를 가져옴
            if (value === 'AC') {
                clearDisplay(); // AC 버튼이면 디스플레이 클리어
            } else if (value === '=') {
                calculateResult(); // = 버튼이면 결과 계산
            } else {
                addValueToDisplay(value); // 그 외의 값은 디스플레이에 추가
            }
        });
    });

    // 입력된 값을 디스플레이의 innerHTML에 추가
    function addValueToDisplay(value) {
        display.innerHTML += value;
    }

    
    function clearDisplay() {
        display.innerHTML = '';
    }

    // eval 함수를 사용하여 디스플레이의 innerHTML을 계산하고 결과를 표시하는 함수
    function calculateResult() {
        try {
            display.innerHTML = eval(display.innerHTML);
        } catch (e) {
            display.innerHTML = "유효하지 않은 문자가 포함되어 있습니다."; // 오류 발생 시 에러 메시지 표시
        }
    }
});
