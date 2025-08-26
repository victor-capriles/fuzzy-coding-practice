// Problem: Smart Home
// Soruce: GPT
// Date: 2025-08-25
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


/*
🏡 Smart Home System – OOP Challenge
🎯 Objective:
Design a modular, object-oriented Smart Home System using JavaScript classes. The system should simulate interaction with smart devices (like lights, thermostats, and door locks).

🧱 Requirements

1. Abstract Base Class: Device (Abstraction)
- Cannot be instantiated directly.
- Private fields:
    - name (string)
    - status ("on" or "off", default "off")
Public methods:
    - turnOn() → sets status to "on"
    - turnOff() → sets status to "off"
    - get name() and get status() for reading fields
    - operate(value) → must be abstract (throw if not implemented)
    - deviceInfo() → returns a string with device name and status

2. Subclasses (Inheritance + Polymorphism)
🟡 Light
- Inherits from Device
- Private field: brightness (default 50)
- Implements operate(level) → sets brightness (0–100) only if device is on
- Overrides deviceInfo() to include brightness

🔴 Thermostat
- Inherits from Device
- Private field: temperature (default 22°C)
- Implements operate(degrees) → sets temperature only if device is on
- Overrides deviceInfo() to include temperature

🔒 DoorLock
- Inherits from Device
- Private field: locked (default true)
- Implements operate(action):
    - "lock" → locks door
    - "unlock" → unlocks door
- Overrides deviceInfo() to include locked status

3. SmartHome Controller Class (Encapsulation + Polymorphism)
- Manages all devices in the home
- Private field: devices (e.g., Map or object to store devices by name)
- Public methods:
    - addDevice(device) → only accepts Device subclasses
    - turnOnDevice(name)
    - turnOffDevice(name)
    - controlDevice(name, value) → calls operate() on device
    - listDevices() → logs summary for all devices via deviceInfo()
*/

class Device {
    #name;
    #status;

    constructor(name) {
        if (this.constructor === Device) {
            throw new Error("Cannot instantiate abstrac class, Device.");
        }
        this.#name = name;
        this.#status = "off"; //harcoded to always default at off
    }

    //method to turn ON device
    turnOn() {
        this.#status = "on";
        console.log(`Turning ON the ${this.#name}!`)
    }

    //method to turn OFF the device
    turnOff() {
        this.#status = "off";
        console.log(`Turning OFF the ${this.#name}!`)
    }

    //method to get name of device
    get name() {
        return this.#name;
    }
    //method to get device status
    get status() {
        return this.#status;
    }

    //abstract operate(value)
    operate(value) {
        throw new Error("Method 'operate()' must be implemented by subclass");
    }

    //method to get device information
    deviceInfo() {
        return (`name: ${this.#name} & status: ${this.#status}`);
    }
}

//extended class light
class Light extends Device {
    #brightness;

    constructor(name) {
        super(name);

        this.#brightness = 50;
    }

    operate(level) {
        if (this.status !== 'on') {
            console, log(`${this.name} is OFF. Please turn it ON before adjusting it's brightness`);
            return;
        }

        if (level < 0 || level > 100) {
            console.log(`Brightness level must be between 0 and 100.`);
            return;
        }

        this.#brightness = level;
        console.log(`Device ${this.name} brightness set to ${this.#brightness}`);
    }

    deviceInfo() {
        return (`${this.name} is currently ${this.status}. Brightness: ${this.#brightness}`);
    }
}

//extended class thermostat
class Thermostat extends Device {
    #temperature;

    constructor(name) {
        super(name);

        this.#temperature = 22;
    }

    operate(degrees) {
        if (this.status !== 'on') {
            console.log(`${this.name} is OFF. Please turn it ON before adjusting the temperature`);
            return;
        }

        if (degrees < 10 || degrees > 30) {
            console.log("Please set a temperature between 10°C and 30°C.")
            return;
        }

        this.#temperature = degrees;
        console.log(`Device ${this.name} temperature is set to ${this.#temperature}`);
    }

    deviceInfo() {
        return (`${this.name} is currently ${this.status}. Temperature: ${this.#temperature}`);
    }
}

//extended class doorlock
class DoorLock extends Device {
    #locked;

    constructor(name) {
        super(name);

        this.#locked = true;
    }

    operate(action) {
        if (action !== "lock" && action !== "unlock") {
            console.log("Invalid action. Use 'lock' or 'unlock'.");
            return;
        }

        //action unlock
        if (action === "unlock") {
            if (!this.#locked) {
                console.log(`${this.name} is already unlocked`);
            } else {
                this.#locked = false;
                console.log(`${this.name} has been unlocked`);
            }
        }

        //action lock
        if (action === "lock") {
            if (this.#locked) {
                console.log(`${this.name} is already locked`);
            } else {
                this.#locked = true;
                console.log(`${this.name} has been locked`);
            }
        }
    }

    deviceInfo() {
        const state = this.#locked ? "Locked" : "Unlocked";
        return `${this.name} is currently ${state} and ${this.status}`;
    }
}

class SmartController {
    #devices;

    constructor() {
        this.#devices = new Map();

    }


    //method to add a device
    addDevice(device) {
        if (!(device instanceof Device)) {
            console.log("Invalid device. Must be a subclass of Device");
            return;
        }

        this.#devices.set(device.name, device);
        console.log(`${device.name} registered!`);
    }

    //method to turn on device
    turnOnDevice(name) {
        const device = this.#devices.get(name);
        if (device) {
            device.turnOn();
        } else {
            console.log(`Device ${name} not found`);
        }
    }

    //method to turn off device
    turnOffDevice(name) {
        const device = this.#devices.get(name);
        if (device) {
            device.turnOff();
        } else {
            console.log(`Device ${name} not found`);
        }
    }

    //method to control device
    controlDevice(name, value) {
        const device = this.#devices.get(name);
        if (device) {
            device.operate(value);
        } else {
            console.log(`Device ${name} not found`);
        }
    }

    //list devices
    listDevices() {
        for (const device of this.#devices.values()) {
            console.log(device.deviceInfo());
        }
    }
}

const controller = new SmartController();

const light = new Light("Living Room Light");
const thermostat = new Thermostat("Thermo");
const door = new DoorLock("Main Door");

controller.addDevice(light);
controller.addDevice(thermostat);
controller.addDevice(door);

controller.turnOnDevice("Thermo");
controller.controlDevice("Thermo", 25);
controller.controlDevice("Main Door", "unlock");

controller.listDevices();




