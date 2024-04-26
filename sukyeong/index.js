let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
