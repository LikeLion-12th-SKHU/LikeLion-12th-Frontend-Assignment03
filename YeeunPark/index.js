const selectedNum = document.querySelector(".selected_num");
const result = document.querySelector(".result");

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {

        const val = button.value;

        if (val === "=") {
            try {
                let calResult = eval(selectedNum.innerHTML); //calResult에 selectedNum 문자열 값을 넣어 eval 함수로 계산 후 저장
                result.innerHTML = calResult;
            } catch (error) {
                result.innerHTML = "eval 함수 에러입니다.";
            }
        } else if (val === "AC") {
            selectedNum.innerHTML = '';
            result.innerHTML = '';
        } else { //입력된 버튼 값을 selectedNum(화면)에 표시
            selectedNum.innerHTML = selectedNum.innerHTML + val;
        }
    });
})