// this function takes the string value of account and return numerical value
function getBalance(account) {
    return parseInt(account.innerHTML.replace("$", "")); //grab the numerical value of money in account
  }
  
  //validates user input and returns numerical value
  function getInput(form) {
    // validate user input to make sure a numerical value what entered
    if (parseInt(form.value)) {
      return parseInt(form.value);
    } else {
      return false;
    }
  }
  
  // This function takes the values in the savings and checking accounts and apply's the correct css class depending on the amount of money in the account
  function checkBalence(checking, savings) {
    //test savings
    if (savings > 0) {
      savingsBalance.classList.remove("zero");
      savingsBalance.classList.add("positive");
    } else {
      savingsBalance.classList.remove("positive");
      savingsBalance.classList.add("zero");
    }
    //test checking
    if (checking > 0) {
      checkingBalance.classList.remove("zero");
      checkingBalance.classList.add("positive");
    } else {
      checkingBalance.classList.remove("positive");
      checkingBalance.classList.add("zero");
    }
  }
  
  /************Checking account code*************** */
  let checking = document.querySelector("#checking"); //select entire checking div
  let checkingBalance = checking.querySelector(".balance"); //from div grab the balance
  let checkingInput = checking.querySelector(".input"); //from div grab the input box
  checkingBalance.classList.add("zero"); //since starting money is 0 add class zero
  
  checking.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
    if (e.target.classList[0] === "deposit") {
      if (getInput(checkingInput)) {
        checkingBalance.innerHTML = `$${getBalance(checkingBalance) + getInput(checkingInput)}`; //set value of account equal to previous value plus deposit amount
      } else {
        alert("invalid input"); //display error if the user input is not a number
      }
    } else if (e.target.classList[0] === "withdraw") {
      if (getInput(checkingInput)) {
        checkingValue = getBalance(checkingBalance); //assign variables to their numerical values
        checkingInputValue = getInput(checkingInput);
        savingsValue = getBalance(savingsBalance);
  
        if (checkingValue >= checkingInputValue) {
          checkingBalance.innerHTML = `$${checkingValue - checkingInputValue}`;
        } else if (checkingValue + savingsValue >= checkingInputValue) {
          //if withdrawl can be covered by both balences together
          checkingBalance.innerHTML = "$0"; //set checking to zero
          checkingInputValue -= checkingValue;
          savingsValue -= checkingInputValue; //take remaining value and subtract from savings
          savingsBalance.innerHTML = `$${savingsValue}`;
        } else {
          alert("Insufficient Funds");
        }
      } else {
        alert("invalid input");
      }
    }
  
    checkBalence(getBalance(checkingBalance), getBalance(savingsBalance)); //check remaining balences in both accounts
  });
  
  /***************Savings Account Code******************/
  
  let savings = document.querySelector("#savings");
  let savingsBalance = savings.querySelector(".balance");
  let savingsInput = savings.querySelector(".input");
  savingsBalance.classList.add("zero");
  
  savings.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
    if (e.target.classList[0] === "deposit") {
      if (getInput(savingsInput)) {
        savingsBalance.innerHTML = `$${getBalance(savingsBalance) + getInput(savingsInput)}`; //set value of account equal to previous value plus deposit amount
      } else {
        alert("invalid input"); //display error if the user input is not a number
      }
    } else if (e.target.classList[0] === "withdraw") {
      if (getInput(savingsInput)) {
        checkingValue = getBalance(checkingBalance); //assign variables to their numerical values
        savingsInputValue = getInput(savingsInput);
        savingsValue = getBalance(savingsBalance);
  
        if (savingsValue >= savingsInputValue) {
          savingsBalance.innerHTML = `$${savingsValue - savingsInputValue}`;
        } else if (checkingValue + savingsValue >= savingsInputValue) {
          //if withdrawl can be covered by both balences together
          savingsBalance.innerHTML = "$0";  //set savings to zero
          savingsInputValue -= savingsValue;
          checkingValue -= savingsInputValue;
          checkingBalance.innerHTML = `$${checkingValue}`;
        } else {
          alert("Insufficient Funds");
        }
      } else {
        alert("invalid input");
      }
    }
    checkBalence(getBalance(checkingBalance), getBalance(savingsBalance));
  });
  