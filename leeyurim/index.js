document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.calculator-box .calculator .element button');
    const recordDisplay = document.getElementById('record');
    const resultDisplay = document.getElementById('result');
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
                resultDisplay.textContent = currentExpression;
            }
        });
    });

    function calculateResult() {
        try {
            const result = eval(currentExpression);
            recordDisplay.textContent += `${currentExpression} = ${result}\n`;
            resultDisplay.textContent = result;
        } catch (error) {
            console.error('Invalid expression:', error);
        } finally {
            resetCalculator();
        }
    }

    function resetCalculator() {
        currentExpression = ''; 
        resultDisplay.textContent = '';
    }
});
