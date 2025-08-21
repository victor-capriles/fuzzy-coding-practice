// Problem: Smart Parking Lot
// Soruce: GPT
// Date: 2025-08-21
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
🚗 Smart Parking Lot System (OOP Challenge in JavaScript)
Scenario:
You are building a small smart parking lot system. The parking lot has a limited number of spots, and different types of vehicles (car, motorcycle, truck) take up space differently.

Requirements

- Classes to create:
    Vehicle (base class)
        Properties:
            licensePlate
            size ("small", "medium", "large")

        Methods:
            getSpotsRequired() must be implemented by subclasses

    Car (subclass of Vehicle)
        Default size: "medium"
        Implements getSpotsRequired() → returns 1

    Motorcycle (subclass of Vehicle)
        Default size: "small"
        Implements getSpotsRequired() → returns 1

    Truck (subclass of Vehicle)
        Default size: "large"
        Implements getSpotsRequired() → returns 2

    ParkingLot
        Properties:
            capacity → total number of spots available
            spots → array of parked vehicles

        Methods:
        park(vehicle)
            Calls vehicle.getSpotsRequired()
            If there is enough space, parks the vehicle and updates spots
            Otherwise, prints "Not enough space!"

        leave(licensePlate)
            Removes a vehicle with the given licensePlate from the lot
            Frees up its spots

        status()
            Prints total spots, remaining free spots, and a list of parked vehicles (licensePlate + type)

- Rules:
    A motorcycle takes 1 spot.
    A car takes 1 spot.
    A truck takes 2 spots.
    If there’s not enough space, the vehicle can’t be parked.
    ParkingLot should work without knowing the vehicle type (only through polymorphism).

*/

//class vehicle
class Vehicle {
    constructor(licensePlate, size) {
        if (this.constructor === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle");
        }
        this.licensePlate = licensePlate;
        this.size = size;
    }

    getSpotsRequired() {
        throw new Error("Abstract method must be implemented")

    }
}

//class car that inherits properties and methods from the class vehicle
class Car extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, "medium");
    }

    getSpotsRequired() {
        return 1;
    }
}

//class motorcycle that inherits properties and methods from the class vehicle
class Motorcycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, "small");
    }

    getSpotsRequired() {
        return 1;
    }
}

//class truck that inherits properties and methods from the class vehicle
class Truck extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, "large");
    }

    getSpotsRequired() {
        return 2;
    }
}

class ParkingLot {
    constructor() {
        this.capacity = 100;
        this.spots = [];
    }

    //method to know hoy many spots are left
    park(vehicle) {

        const usedSpots = this.spots.reduce((sum, v) => sum + v.getSpotsRequired(), 0);
        const freeSpots = this.capacity - usedSpots;

        if (freeSpots < vehicle.getSpotsRequired()) {
            console.log("Not enough space");
            return false;
        }
        this.spots.push(vehicle)
        console.log("Enough space, vehicle is parked!");
        return true;

    }

    //method to remove a license when a car leaves
    leave(licensePlate) {
        const index = this.spots.findIndex(v => v.licensePlate === licensePlate);

        if (index === 1) {
            console.log(`Vehicle with plate ${licensePlate} not found`);
            return false;
        }

        const [removed] = this.spots.splice(index, 1);
        console.log(`Vehicle ${removed.constructor.name} with plate ${licensePlate} has left`);
        return true;
    }

    //method
    status() {
        //same functionality as reduce
        let usedSpots = 0;
        for (let v of this.spots) {
            usedSpots += v.getSpotsRequired();
        }
        const freeSpots = this.capacity - usedSpots;

        console.log(`Total spots: ${this.capacity}`);
        console.log(`Free spots: ${freeSpots}`);
        console.log("Parked vehicles:");
        this.spots.forEach(v => {
            console.log(`- ${v.constructor.name} | Plate: ${v.licensePlate}`);
        });
    }
}

const lot = new ParkingLot();
const c1 = new Car("CAR123");
const m1 = new Motorcycle("MOTO9");
const t1 = new Truck("TRK88");

lot.park(c1);
lot.park(m1);
lot.park(t1);

lot.status();

lot.leave("CAR123");
lot.status();