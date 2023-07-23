class Calculator {
    constructor(){
        this.textToBeDisplayed = "";
        this.numbers = [];
        this.operations = [];
        this.on = true;
        this.operationCharacters = ["-","+","/","*", "!", "√"];
        this.screen = document.querySelector('.calculator__screen');
        this.displayText = document.querySelector('[data-display]');
    }

    clearScreen()
    {
        this.textToBeDisplayed = "";
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
                this.textToBeDisplayed += number;
                return;
            }
            
            if (this.operationCharacters.includes(this.textToBeDisplayed[this.textToBeDisplayed.length-1]))
            {
                this.numbers.push(number);
                this.textToBeDisplayed += number;
                return;
            }
            
            this.numbers[this.numbers.length-1] += number;
            this.textToBeDisplayed += number;
        }
    }

    addOperation(operation)
    {
        if (this.on)
        {
            this.textToBeDisplayed += operation;
            this.operations.push(operation);
        }
    }

    displayScreen()
    {
        this.displayText.innerHTML = this.textToBeDisplayed;
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
            if (this.operations[i] === "!") 
            {
                let result = 1;
                for(let u = this.numbers[i]; u > 1; u--) result *= u; 
                this.numbers[i] = result;
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
    
        if (!Number.isInteger(this.numbers[0])) this.textToBeDisplayed = String(this.numbers[0].toFixed(2));
        else this.textToBeDisplayed = String(this.numbers[0]);
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