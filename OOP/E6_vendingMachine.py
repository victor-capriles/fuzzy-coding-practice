# Problem: Vending Machine
# Source: GPT
# Date: 2025-09-11
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
🏪 Vending Machine OOP Challenge.

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
"""
class Product:
    def __init__(self, name: str, price: float, quantity: int):
        self.name = name 
        self.price = price
        self.quantity =quantity
    
    def purchase(self):
        if self.quantity <= 0:
            return "Out of stock"
        
        self.quantity -= 1
        return f"Thanks for purchasing {self.name}, Current stock {self.quantity}"

class Snack(Product):
    def __init__(self, name: str, price: float, quantity: int, calories: int):
        super().__init__(name, price, quantity)
        self.calories = calories

    def purchase(self):
        if self.quantity <= 0:
            return "Out of stock"
            
        self.quantity -= 1
        return f"Thanks for purchasing {self.name}, it contains {self.calories} cals. Current quantity: {self.quantity}"

class VendingMachine:
    def __init__(self, balance = 0):
        self.products = []
        self.__balance = balance

    def insertCoin(self, amount):
        if amount < 0:
            return f"Invalid operation. Current balance: {self.__balance}"
        
        self.__balance += amount
        return f"Inserted: {amount}. Currrent balance: {self.__balance}"
    
    def getBalance(self):
        return self.__balance
    
    def addProduct(self, product):
        self.products.append(product)
    
    def selectProduct(self, productName):
        for product in self.products:
            if product.name.lower() == productName.lower():
                
                if product.quantity <= 0:
                    return "Out of stock"
                
                if self.__balance < product.price:
                    return "Not enough balance"
                 
                self.__balance -= product.price
                product.purchase()
                
                return f"Dispensed {product.name}. Remaining balance: {self.__balance}"
    
    def refund(self):
        refund_amount = self.__balance

        if refund_amount == 0:
            return "not enough balance for refund"
        
        self.__balance = 0
        return f"here's your refund {refund_amount}"