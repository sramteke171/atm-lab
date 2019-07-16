[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# ATM

We're going to build an application to track checking and savings account
balances.

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). You are
required to turn in your submission by making a pull request on the original
repository.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

### Pseudocode

Spend up to 20 minutes writing some pseudocode. Think carefully about every step
involved in using an ATM. For example, it allows users to input a dollar amount
when they want deposit money. Also, think about how there are two types of
accounts -- checking and savings. Take a look at the **Specifications** below to
guide your pseudocode.

Include your pseudocode as comments within your program.

### Specifications

* Users can deposit money into an account
* Users can withdraw money from an account
* Account does not allow a negative balance
* The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)
* The two accounts have independent functionality

## Bonus

What happens when the user wants to withdraw more money from the checking account than is in the account?

* If a withdrawal can be covered by the balances in both accounts, bring the withdrawn-from account down to $0 and take the remainder from the other account.
* If the withdrawn amount is more than the combined account balance, display an error.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
