console.log("js working");

// involved in using an ATM. For example, it allows users to input a dollar amount
// when they want deposit money. Also, think about how there are two types of
// accounts -- checking and savings. Take a look at the **Specifications** below to
// guide your pseudocode.

// Include your pseudocode as comments within your program.

// ### Specifications

// * Users can deposit money into an account
// * Users can withdraw money from an account
// * Account does not allow a negative balance
// * The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)
// * The two accounts have independent functionality

//Retrieve Checking acct 
let checking = document.querySelector("#checking"); //console.log("print checking" + checking);
let savings = document.querySelector("#savings"); //let inputS = document.querySelector(".input");

let inputD = document.querySelector("#checking .deposit"); // console.log(inputD)
let amtDep = parseInt(document.querySelector("#checking .input").value);
console.log("amt" + amtDep);

//Retrieve savings acct 
let inputS = document.querySelector("#savings .deposit"); // console.log(inputS)
let amtSav = parseInt(document.querySelector("#savings .input").value);
console.log("amt" + amtSav);

//rETRIEVE Balance field
let balance = parseInt(document.querySelector(".balance").value); console.log("balance field is " + balance);

//Retrieve Buttons value
let checkingDepositButton = document.querySelector("#checking .deposit"); // console.log(checkingDepositButton);
let checkingWithdrawButton = document.querySelector("#checking .withdraw"); // console.log(checkingWithdrawButton);
let savingsDepositButton = document.querySelector("#savings .deposit"); // console.log(savingsDepositButton);
let savingsWithdrawButton = document.querySelector("#savings .withdraw"); // console.log(savingsWithdrawButton);



//Add Event Listeners to buttons
checkingDepositButton.addEventListener("click", (event) => {
    c.DepositChecking();

});
checkingWithdrawButton.addEventListener("click", (event) => {
    c.WithdrawChecking();

});
savingsDepositButton.addEventListener("click", (event) => {
    c.DepositSavings();

});
savingsWithdrawButton.addEventListener("click", (event) => {
    c.WithdrawSavings();

});


//parent class
class ATM {
    constructor(accountType) {
        this.accountType = accountType;
    }
} //end of ATM class

class BankAccount extends ATM {
    constructor(accountType) {
        super(accountType);
        this.checkingbalance = 0;
        this.savingsBalance = 0;

        let amtD = parseInt(document.querySelector("#checking .input").value);
        let amtS = parseInt(document.querySelector("#savings .input").value);
    }
    //methods for CHECKING acct

    DepositChecking() {
        let amtD = parseInt(document.querySelector("#checking .input").value);  //console.log("input amt is" + amtD);
        console.log(`balance before deposit into Checking is ${this.checkingbalance}`);
        this.checkingbalance += parseInt(amtD);
        console.log(`balance after deposit into Checking is ${this.checkingbalance}`);

        let htmlbalance = parseInt(document.querySelector("#checking .balance").value); console.log("html balance field is " + htmlbalance);
        document.querySelector("#checking .balance").innerHTML = this.checkingbalance;
        console.log("html balance field is==> " + htmlbalance);

        return this.checkingbalance;
    }
    WithdrawChecking() {
        let amtW = parseInt(document.querySelector("#checking .input").value);
        console.log("inside withdraw checking method");
        console.log("this.checkingbalance is " + this.checkingbalance);

        if (amtW > this.checkingbalance) {
            console.log("negative balance")
        }
        else {
            this.checkingbalance -= parseInt(amtW);

            console.log(`balance after withdrawing is ${this.checkingbalance}`);
            return this.checkingbalance;
        }
        if (this.checkingbalance === 0) {
            // this.htmlbalance = document.querySelector("#savings .balance"); console.log("html balance field is " + this.htmlbalance);
            // this.htmlBalance.className += ' zero';

            const body = document.querySelector("body");
            body.style.backgroundColor = "#F52F4F";
        }
    }

    //methods for SAVINGS acct
    DepositSavings() {
        let amtS = parseInt(document.querySelector("#savings .input").value);
        console.log("input amt is" + amtS);
        console.log("balance before deposit into Savings is" + this.savingsBalance);

        this.savingsBalance += parseInt(amtS);

        console.log("balance after deposit into Savings is" + this.savingsBalance);

        let htmlbalance = parseInt(document.querySelector("#savings .balance").value); console.log("html balance field is " + htmlbalance);
        document.querySelector("#savings .balance").innerHTML = this.savingsBalance;
        console.log("html balance field is==> " + htmlbalance);

        return this.savingsBalance;
    }
    WithdrawSavings() {
        let amtS = parseInt(document.querySelector("#savings .input").value);

        if (amtS > this.savingsBalance) {
            //this.document.querySelector("#checking .balance").classname = "zero"
            console.log("negative balance")
        }
        else {
            this.savingsBalance -= parseInt(amtS);

            console.log(`balance after withdrawing is ${this.savingsBalance}`);
            return this.savingsBalance;
        }
        if (this.savingsBalance === 0) {
            // this.htmlbalance = document.querySelector("#savings .balance"); console.log("html balance field is " + htmlbalance);
            // this.htmlBalance.className += ' zero';

            const body = document.querySelector("body");
            body.style.backgroundColor = "#F52F4F";
        }
    }//END WITHDRAW SAVING

}//end of class

let c = new BankAccount();






//Code from leo
// Create an Account class
// Has type and balance properties
// balance starts at 0
// deposit method
// adds the amount to the balance
// withdraw method
// subtracts the amount from the balance
// The amount cannot be greater than the balance
// class Account {
//     constructor(type) {
//         this.type = type;
//         this.balance = 0;
//         this.htmlAccount = document.querySelector(`#${this.type}`);
//         this.htmlBalance = document.querySelector(`#${this.type} .balance`);
//         this.depositBtn = document
//             .querySelector(`#${this.type} .deposit`)
//             .addEventListener('click', this.deposit);
//         this.withdrawBtn = document
//             .querySelector(`#${this.type} .withdraw`)
//             .addEventListener('click', this.withdraw);
//     }
//     checkBtn = () => {
//         console.log(this.withdrawBtn);
//     };
//     deposit = () => {
//         let input = document.querySelector(`#${this.type} .input`).value;
//         let amount = parseInt(input);
//         this.balance += amount;
//         this.htmlBalance.innerHTML = `$${this.balance}`;
//         console.log(`Balance after depositing $${amount} is: $${this.balance}`);
//         if (this.balance > 0) {
//             this.htmlBalance.className = 'balance';
//         }
//     };
//     withdraw = () => {
//         let input = document.querySelector(`#${this.type} .input`).value;
//         let amount = parseInt(input);
//         if (amount > this.balance) {
//             alert('Withdrawing will make the balance go negative');
//         } else {
//             this.balance -= amount;
//             this.htmlBalance.innerHTML = `$${this.balance}`;
//             console.log(`Balance after withdrawing $${amount} is: $${this.balance}`);
//         }
//         if (this.balance === 0) {
//             this.htmlBalance.className += ' zero';
//         }
//     };
// }
// const checking = new Account('checking');
// const savings = new Account('savings');
//   // checking.deposit(30);
//   // checking.deposit(50);
//   // checking.withdraw(10);
//   // checking.withdraw(300);
//   // savings.deposit(500);
//   // savings.withdraw(40);
//   // checking.checkBtn();
//   // savings.checkBtn();











