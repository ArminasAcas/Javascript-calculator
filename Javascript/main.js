document.addEventListener('DOMContentLoaded', function () {
    let buttons = {
        numberButtons: document.querySelectorAll('[data-number]'),
        operationButtons: document.querySelectorAll('[data-operation]'),
        onButton: document.querySelector('[data-on]'),
        clearButton: document.querySelector('[data-clear]'),
        equalButton: document.querySelector('[data-equal]')
    }
    
    let calculator = new Calculator();

    if(!buttons || !calculator) return;

    if (buttons.numberButtons)
    {
        buttons.numberButtons.forEach(button => {
            button.addEventListener('click', () => 
            {
                calculator.addNumber(button.innerHTML);
                calculator.displayScreen();
            })
        });
    }

    if (buttons.operationButtons)
    {
        buttons.operationButtons.forEach(button => {
            button.addEventListener('click', () => 
            {
                calculator.addOperation(button.innerHTML);
                calculator.displayScreen();
            })
        });
    }

    if (buttons.clearButton)
    {
        buttons.clearButton.addEventListener('click', () => 
        {
            calculator.clearScreen();
            calculator.displayScreen();
        })
    }

    if (buttons.onButton)
    {
        buttons.onButton.addEventListener('click', () => 
        {
            calculator.changeDeviceState();
        })
    }

    if (buttons.equalButton)
    {
        buttons.equalButton.addEventListener('click', () => 
        {
            calculator.calculateResult();
            calculator.displayScreen();
        })
    }

});