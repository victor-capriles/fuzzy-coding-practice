// Problem: Duel of the Classes
// Soruce: GPT
// Date: 2025-08-13
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
You are tasked with creating a simple turn-based RPG duel system between two character types: Warrior and Mage.
Both characters inherit from a shared Player base class and have unique abilities. 
Your goal is to implement their behavior using classes, inheritance, and encapsulation.
You should also override at least one method to demonstrate polymorphism.

🔧 Requirements

1. Base Class: Player
Create a Player class with the following:
Properties: name, hp (default: 150), mp (default: 100)
Method: isAlive() → returns true if hp > 0
Method: status() → logs current HP and MP
Method: attack(target) → to be overridden by subclasses (polymorphism!)

2. Subclass: Warrior extends Player
Method: attack(target) → costs 15 MP, deals 30 damage
Method: block() → sets this.blocking = true
When blocking is true, the next damage taken is halved (rounded down), then blocking resets to false

3. Subclass: Mage extends Player
Method: attack(target) → costs 25 MP, deals 50 damage
Method: manaShield() → spends 20 MP to instantly heal 20 HP
*/

//player class
class Player {
    constructor(name, hp, mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    //method is alive
    isAlive() {
        return this.hp > 0;
    }

    //method status
    status() {
        console.log(`${this.name}`, `HP: ${this.hp}`, `MP:${this.mp}`)
    }

    //method attack(target)
    attack(target) {
        console.log(`${this.name} attacked... but nothing happened`)
    }
}

// warrior subclass
class Warrior extends Player {
    constructor(name, hp = 150, mp = 100) {
        super(name, hp, mp);
        this.blocking = false;
    }

    //attack method
    attack(target) {
        if (this.mp < 15) {
            console.log(`${this.name} does not have enough MP to attack`);
            return;
        }

        const damage = 30;
        this.mp -= 15;

        const actualDamage = target.blocking ? Math.floor(damage / 2) : damage;
        target.hp -= actualDamage;

        console.log(`${this.name} slashes ${target.name} for ${actualDamage} damage.`);
        console.log(`${this.name} now has ${this.mp} MP`);
        target.blocking = false
    }

    //blocking method
    block() {
        this.blocking = true;
        console.log(`${this.name} is preparing to block the next attack!`)
    };
}

//mage subclass
class Mage extends Player {
    constructor(name, hp = 100, mp = 200) {
        super(name, hp, mp);
    }

    //attack target
    attack(target) {
        const cost = 25;
        const damage = 50;

        if (this.mp < cost) {
            console.log(`${this.name} does not have enough MP to attack`);
            return;
        }

        this.mp -= cost;
        target.hp -= damage;

        console.log(`${this.name} used a Magic attack dealing ${damage} damage to ${target.name}!`);
        console.log(`${this.name}'s MP:${this.mp}`);
    }

    //mana shield
    manaShield() {
        const cost = 20;
        const healing = 20;

        if (this.mp < cost) {
            console.log(`${this.name} does not have enough MP to use mana shield!`);
            return;
        }

        this.mp -= 20;
        this.hp += healing;

        console.log(`${this.name} has healed! HP:${this.hp}! Current MP:${this.mp}`)
    }
}

// run simulation
const warrior = new Warrior("Victor the Brave");
const mage = new Mage("Chuma the Wise");

warrior.status();
mage.status();

mage.attack(warrior);
warrior.block();
mage.attack(warrior);
warrior.attack(mage);
mage.manaShield();

