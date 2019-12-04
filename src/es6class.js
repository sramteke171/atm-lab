class Account {
    constructor(name){
        this.name = name; 
        this.amount = 0; 
        // gotta grab all the things i need from the html
        this.htmlAccount = document.querySelector(`#${this.name}`)
        this.htmlBalance = document.querySelector(`#${this.name} .balance`)
        this.depositButton = document.querySelector(`#${this.name} .deposit`).addEventListener('click', this.deposit)
        this.withdrawButton = document.querySelector(`#${this.name} .withdraw`).addEventListener('click', this.withdraw)
    }
    deposit = () => {
        let input = document.querySelector(`#${this.name} .input`).value
        let inputAmount = parseInt(input)
        // I'm grabbing the input box here because by the time this method is called, there is going to be something in that input box
        // After taking in that input's value I have to convert it from a string -> number using parseInt()

        this.amount = this.amount + inputAmount; // Adding the input amount to the actual that instance's amount
        console.log(`🤑 ${inputAmount} was deposited new total: ${this.amount}`); 
        
        this.htmlBalance.innerHTML = `$${this.amount}` 
        // this refects the amount in the instances to the innerHTML of the DOM element

        if(this.amount >  0) { // checking if amount is more than zero then remove the zero class. 
            this.htmlAccount.classList.remove('zero')
        } 
    }
    withdraw = () => {
        let amountRequested = document.querySelector(`#${this.name} .input`).value
        // querying the HTML in the method because when the method is called there should be something in the input box at that given time. 
        if (this.amount < amountRequested){
            //dont do anything will fall into neg balance
            console.log(`😰 ${inputAmount} can't be withdrawn from ${this.name} will it will make it a negative amount. `)
            // should probably create some kind of visual feedback here for the user to see in the dom that this isn't possible. 
        } else { // if amountRequested is less than account's amount then...
            this.amount = this.amount - amountRequested; 
            console.log(`💸 ${amountRequested} was withdrawn new total: ${this.amount}`)

            this.htmlBalance.innerHTML = `$${this.amount}` // set the account's amount to the innerHTML of that DOM element

            if(this.amount ==  0) { // if the  withdraw requested makes the account zero then...
                this.htmlAccount.classList.add('zero')
            }        
        }
    }
}

const checking = new Account('checking');
const savings = new Account('savings');

// checking.deposit(40)
// checking.deposit(20)
// checking.withdraw(15)
// checking.withdraw(50)
