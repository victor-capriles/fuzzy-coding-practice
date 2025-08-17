// Problem: ATM Simulation
// Soruce: Coding challenge
// Date: 2025-08-17
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*

You’ve been hired to simulate a basic ATM system that handles multiple user accounts. Each account has a balance and can perform banking operations.
Your goal is to build a class-based system that models the core behavior of an ATM and accounts using object-oriented principles.

🔧 Requirements

1. Class: BankAccount
Properties:
    accountHolder (name)
    balance (default: 0)
    pinCode

Methods:
    deposit(amount) → adds to balance
    withdraw(amount, enteredPin) → subtracts from balance only if pin is correct and funds are sufficient
    checkBalance(enteredPin) → logs balance only if pin is correct


2. Class: ATM
The ATM holds multiple accounts and lets users interact with them.
Properties:
    accounts → an array of BankAccount instances

Methods:
    addAccount(account) → adds a new account to the ATM
    findAccount(name) → finds an account by holder name
    transfer(fromName, toName, amount, pin) → moves money from one account to another (with pin check)


✅ Constraints
    If a wrong PIN is entered, print an error.
    If there are insufficient funds, print an error.
    Log all successful transactions with a message like:

"Transferred $100 from Victor to Denise. New balance: $50"
*/


//class bank account
class bankAccount {
    constructor(accountHolder, balance = 0, pincode) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.pincode = pincode;
    }

    //method to deposit money
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}, current balance is ${this.balance}`);
    }

    //method to withdrawn money
    withdrawn(amount, enteredPin) {
        //check pin
        if (enteredPin !== this.pincode) {
            console.log("Incorrect PIN. Try again");
            return;
        }

        //check balance
        if (this.balance < amount) {
            console.log(`Insufficient funds. Current balance is ${this.balance}`);
            return;
        }

        //withdran money
        this.balance -= amount;
        console.log(`Withdrew ${amount}. Current balance is: ${this.balance}`);
    }

    //check money in account
    checkBalance(enteredPin) {
        //check pin
        if(enteredPin !== this.pincode) {
            console.log("Incorrect PIN. Try again");
            return;
        }
        console.log(`Current balance is ${this.balance}`);
    }


}


//class ATM
class ATM {
    constructor() {
        this.accounts = [];
    }

    //add a new account into the atm
    addAccount(account) {
        this.accounts.push(account);
        console.log(`Account for ${account.accountHolder} added.`);
    }

    //find account by holder name
    findAccount(name) {
        return this.accounts.find(acc => acc.accountHolder === name);
    }


    //transfer money
    transfer(fromName, toName, amount, pin) {
        //create const from and to
        const fromAccount = this.findAccount(fromName);
        const toAccount = this.findAccount(toName);

        //check if the account exists
        if (!fromAccount || !toAccount) {
            console.log("One or both account not found");
            return;
        }

        //check pin
        if(pin !== fromAccount.pincode) {
            console.log("Incorrect PIN. Try again.");
            return;
        }

        //check if there's money
        if(fromAccount.balance < amount) {
            console.log("Insufficient funds");
            return;
        }

        //transfer money
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        console.log(`Transferred ${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}, current balance is ${fromAccount.balance}`);
        console.log(`Received ${amount}! from ${fromAccount.accountHolder}. New balance is ${toAccount.balance}`);

    }
}

const atm = new ATM();

const acc1 = new bankAccount("Victor", 500, "1234");
const acc2 = new bankAccount("Sandra", 200, "5678");

atm.addAccount(acc1);
atm.addAccount(acc2);

atm.transfer("Victor", "Sandra", 400, "1234");