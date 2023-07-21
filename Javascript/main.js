document.addEventListener('DOMContentLoaded', function () {
    class Calculator {

        constructor(){
            this.equation = "";
            this.numbers = [];
            this.operations = [];
            this.on = true;
        }

        clearScreen()
        {
            this.equation = "";        
        }

        addNumber(number)
        {
            if (this.on)
            {
                this.equation += number;
            }
            
        }

        addOperation(operation)
        {
            if (this.on)
            {
                this.equation += operation;
            }
            
        }

        displayScreen()
        {
            displayText.innerHTML = this.equation;
        }

        displayResult()
        {

        }

        changeDeviceState()
        {
            this.on = !this.on
            if(!this.on)
            {
                this.clearScreen();
                this.displayScreen();
            }
        }
    };

    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
    const onButton = document.querySelector('[data-on]');
    const clearButton = document.querySelector('[data-clear]');
    const equalButton = document.querySelector('[data-equal]');
    const displayText = document.querySelector('[data-display]');

    let calculator = new Calculator();

    if (numberButtons)
    {
        numberButtons.forEach(button => {
            button.addEventListener('click', () => 
            {
                calculator.addNumber(button.innerHTML);
                calculator.displayScreen();
            })
        });
    }

    if (operationButtons)
    {
        operationButtons.forEach(button => {
            button.addEventListener('click', () => 
            {
                calculator.addOperation(button.innerHTML);
                calculator.displayScreen();
            })
        });
    }

    if (clearButton)
    {
        clearButton.addEventListener('click', () => 
        {
            calculator.clearScreen();
            calculator.displayScreen();
        })
    }

    if (onButton)
    {
        onButton.addEventListener('click', () => 
        {
            calculator.changeDeviceState();
        })
    }

});