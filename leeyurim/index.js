document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.calculator-box .calculator .element button');
    const inputDisplay = document.getElementById('result');
    const recordDisplay = document.getElementById('record');
    let currentExpression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonValue = event.target.textContent;

            if (buttonValue === '=') {
                calculateResult();
            } else if (buttonValue === 'AC') {
                resetCalculator();
            } else {
                currentExpression += buttonValue;
                inputDisplay.textContent += buttonValue;
            }
        });
    });

    function calculateResult() {
        try {
            const result = eval(currentExpression);
            recordDisplay.textContent += `${currentExpression} = ${result}\n`;
            inputDisplay.textContent = result;
        } catch (error) {
            console.error('Invalid expression:', error);
        }
    }

    function resetCalculator() {
        currentExpression = '';
        inputDisplay.textContent = '';
        recordDisplay.textContent = '';
    }
});
