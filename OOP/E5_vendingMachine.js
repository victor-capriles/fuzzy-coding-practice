// Problem: Vending Machine
// Soruce: GPT
// Date: 2025-08-30
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Requirements:

1. Create a Product class with:
    - name (string), price (number), and quantity (number).
    - A method purchase() that decreases the quantity if available.

2. Create a VendingMachine class with:
    - An internal list of products (array of Product objects).
    - A balance field (amount of money inserted).

Methods:
    - insertCoin(amount) → adds money to balance.
    - selectProduct(productName) → checks if enough balance and stock exist, then dispenses product, decreases balance, and reduces product quantity.
    - refund() → returns remaining balance.

Apply OOP concepts:
- Encapsulation: Keep balance private (#balance) and expose getters.
- Inheritance: Add a Snack subclass of Product that tracks calories.
- Polymorphism: Override purchase() in Snack to also log calorie info.
- Abstraction: Use a base Product class that could later support Drink, Snack, etc.

*/

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // method to purchase, decrease quantity
    purchase() {
        // fail fast
        if (this.quantity <= 0) {
            return ("Not enough stock");
        }
        this.quantity -= 1;
        return (`Thanks for your purchase. Current stock ${this.quantity}`)
    }
}

class Snack extends Product {
    constructor(name, price, quantity, calories) {
        super(name, price, quantity);
        this.calories = calories;
    }

    // override the purchase method to track calories
    purchase() {
        if (this.quantity <= 0) {
            return ("Not enough stock");
        }

        this.quantity -= 1;
        return (`Thanks for buying the snack ${this.name}, it contains ${this.calories}. Current stock ${this.quantity}`);
    }
}

class VendingMachine {
    // make balance private and expose a getter
    #balance;

    constructor(balance = 0) {
        this.products = [];
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    insertCoin(amount) {
        if (amount <= 0) {
            return ("Invalid amount");
        }
        this.#balance += amount;

        return (`Inserted ${amount}. Current machine balance ${this.#balance}`);
    }

    addProduct (product) {
        this.products.push(product);
    }

    selectProduct(productName) {
        const product = this.products.find(p => p.name === productName);

        if (!product) {
            return ("Product not found");
        }
        if (product.quantity <= 0) {
            return ("Not enough stock");
        }
        if (this.#balance < product.price) {
            return ("not enough balance");
        }

        // call method purchase
        product.purchase();
        this.#balance -= product.price;

        return (`Dispensed ${product.name}. Remaining balance ${this.#balance}`);
    }

    refund() {
        const refundAmount = this.#balance;
        this.#balance = 0;
        return `Refunded: $${refundAmount}`;
    }
}