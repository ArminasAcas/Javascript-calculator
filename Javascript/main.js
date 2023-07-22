document.addEventListener('DOMContentLoaded', function () {
    class Calculator {

        constructor(){
            this.displayText = "";
            this.numbers = [];
            this.operations = [];
            this.on = true;
            this.operationCharacters = ["-","+","/","*", "!", "√"];
            this.screen = document.querySelector('.calculator__screen');
        }

        clearScreen()
        {
            this.displayText = "";
            this.numbers = []; 
            this.operations = [];       
        }

        addNumber(number)
        {
            if (this.on)
            {
                if (this.numbers.length <= 0)
                {
                    this.numbers.push(number);
                    this.displayText += number;
                    return;
                }
                
                if (this.operationCharacters.includes(this.displayText[this.displayText.length-1]))
                {
                    this.numbers.push(number);
                    this.displayText += number;
                    return;
                }
                
                this.numbers[this.numbers.length-1] += number;
                this.displayText += number;
            }

        }

        addOperation(operation)
        {
            if (this.on)
            {
                this.displayText += operation;
                this.operations.push(operation);
            }
            
        }

        displayScreen()
        {
            displayText.innerHTML = this.displayText;
        }

        calculateResult()
        {
            this.numbers = this.numbers.map(Number);
        
            let i = 0;
            while (i <= this.operations.length)
            {
                if (this.operations[i] === "√") 
                {
                    this.numbers[i] = Math.sqrt(this.numbers[i]);
                    this.operations.splice(i,1);
                }
                else i++;
            };

            i = 0;
            while (i <= this.operations.length)
            {
                if (this.operations[i] === "*") 
                {
                    this.numbers[i] = this.numbers[i] * this.numbers[i+1];
                    this.numbers.splice(i+1,1);
                    this.operations.splice(i,1);
                }
                else if (this.operations[i] === "/") 
                {
                    this.numbers[i] = this.numbers[i] / this.numbers[i+1];
                    this.numbers.splice(i+1,1);
                    this.operations.splice(i,1);
                }
                else i++;
            };

            i = 0;
            while (i <= this.operations.length)
            {
                if (this.operations[i] === "+") 
                {
                    this.numbers[i] = this.numbers[i] + this.numbers[i+1];
                    this.numbers.splice(i+1,1);
                    this.operations.splice(i,1);
                }
                else if (this.operations[i] === "-") 
                {
                    this.numbers[i] = this.numbers[i] - this.numbers[i+1];
                    this.numbers.splice(i+1,1);
                    this.operations.splice(i,1);
                }
                else i++;
            };
        

            if (!Number.isInteger(this.numbers[0])) this.displayText = String(this.numbers[0].toFixed(2));
            else this.displayText = String(this.numbers[0]);
        }

        changeDeviceState()
        {
            this.on = !this.on
            if(!this.on)
            {
                this.clearScreen();
                this.displayScreen();
                if(this.screen) this.screen.style.backgroundColor = "#859899";
            }
            else if(this.screen) this.screen.style.backgroundColor = "#cadfe0";
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

    if (equalButton)
    {
        equalButton.addEventListener('click', () => 
        {
            calculator.calculateResult();
            calculator.displayScreen();
        })
    }

});