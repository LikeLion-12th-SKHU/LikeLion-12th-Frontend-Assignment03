function appendValue(value) {
    const display = document.querySelector('#display');
    display.innerHTML += value;
}

function clearDisplay() {
    const display = document.querySelector('#display');
    display.innerHTML = '';
}

function calculate() {
    const display = document.querySelector('#display');
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = '제대로 수식을 완성하지 못 했어요';
    }
}