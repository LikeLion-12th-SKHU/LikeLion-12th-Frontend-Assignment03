function add(char) {
    var display = document.getElementById('display');
    display.value = display.value + char;
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
    return ""
}

function reset() {
    document.getElementById('display').value = ""
    return ""
}

