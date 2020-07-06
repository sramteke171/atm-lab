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

//Retrieve Buttons value
let checkingDepositButton = document.querySelector("#checking .deposit"); // console.log(checkingDepositButton);
let checkingWithdrawButton = document.querySelector("#checking .withdraw"); // console.log(checkingWithdrawButton);
let savingsDepositButton = document.querySelector("#savings .deposit"); // console.log(savingsDepositButton);
let savingsWithdrawButton = document.querySelector("#savings .withdraw"); // console.log(savingsWithdrawButton);


//Add Event Listeners to buttons
checkingDepositButton.addEventListener("click", (event) => {
    //console.log("deposit checking button working", inputD);
    let c = new BankAccount();
    c.DepositChecking();

});
checkingWithdrawButton.addEventListener("click", (event) => {
    //console.log("withdraw checking button working");
    let c = new BankAccount();
    c.WithdrawChecking();

});
savingsDepositButton.addEventListener("click", (event) => {
    //console.log("deposit savings button working", inputD);
    let c = new BankAccount();
    c.DepositSavings();

});
savingsWithdrawButton.addEventListener("click", (event) => {
    //console.log("in withdraw savings button working");
    let c = new BankAccount();
    c.WithdrawSavings();

});


class ATM {
    constructor(accountType) {
        this.accountType = accountType;
    }
} //end of ATM class

class BankAccount extends ATM {
    constructor(accountType, checkingBalance, savingsBalance) {
        super(accountType);
        this.checkingbalance = 0;
        this.savingsBalance = 100;
    }
    //methods for CHECKING acct
    DepositChecking() {
        console.log("in deposit checking");

        let amtD = parseInt(document.querySelector("#checking .input").value);
        console.log("input amt is" + amtD);
        console.log("balance before deposit into Checking is" + this.checkingbalance);

        this.checkingbalance += parseInt(amtD);
        console.log("balance after deposit into Checking is" + this.checkingbalance);
        return this.checkingbalance;
    }
    WithdrawChecking() {
        let amtW = parseInt(document.querySelector("#checking .input").value);
        console.log("inside withdraw checking method");
        console.log("this.checkingbalance is " + this.checkingbalance);

        if (this.checkingbalance > 0) {
            this.checkingbalance -= parseInt(amtW);
            console.log(`balance after withdrawing is ${this.checkingbalance}`);
            return this.checkingbalance;
        } else {
            console.log("negative balance")
        }
    }

    //methods for SAVINGS acct
    DepositSavings() {
        console.log("in deposit Savings");
        let amtS = parseInt(document.querySelector("#savings .input").value);
        console.log("input amt is" + amtS);
        console.log("balance before deposit into Savings is" + this.savingsBalance);

        this.savingsBalance += parseInt(amtS);

        console.log("balance after deposit into Savings is" + this.savingsBalance);
        return this.savingsBalance;
    }
    WithdrawSavings() {
        let amtS = parseInt(document.querySelector("#savings .input").value);
        if (this.savingsBalance > 0) {
            this.savingsBalance -= parseInt(amtS);
            console.log(`balance after withdrawing is ${this.savingsBalance}`);
            return this.savingsBalance;
        } else {
            console.log("negative balance")
        }
    }
}//end of class


