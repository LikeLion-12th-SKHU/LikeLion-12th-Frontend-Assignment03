class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.operatorCheck = true
        this.equalsCheck = false
        this.clear()
    }

    appendNumber(number) {
        if (this.equalsCheck) {
            this.displayContent = number 
            this.equalsCheck = false; 
        } else {
            this.displayContent += number 
        }
        this.operatorCheck = false
    }

    appendOperator(operator) {
        if (this.operatorCheck) return false
        if (this.equalsCheck) this.equalsCheck = false
        this.displayContent += operator
        return this.operatorCheck = true
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute() {
        this.equalsCheck = true
        if (this.operatorCheck) return
 
        this.displayContent = eval(this.displayContent)
    }
}
 
const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
 
const calculator = new Calculator(displayElement)
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                if (calculator.appendOperator(button.innerText)) {
                    calculator.updateDisplay()
                }
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})