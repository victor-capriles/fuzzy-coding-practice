# Problem: Smart Home
# Source: GPT
# Date: 2025-09-14
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Exercise: Smart Home System
Background

You’re designing a simplified smart home system where different devices (lights, thermostat, security camera, etc.) can be turned on/off and report their status. 
Each device has unique behaviors, but they all follow a common interface.

Requirements

1. Abstract Base Class
- Create an abstract class SmartDevice with:
    - Attributes: name (str), status (bool → True for on, False for off).
    - Abstract methods:
        - turn_on()
        - turn_off()
        - get_status()

2. Concrete Device Classes
- Implement at least three subclasses:
    - Light: Has brightness (0–100). When turned on, brightness defaults to 50.
    - Thermostat: Has a temperature setting (default 22°C). Allow changing the temperature.
    - SecurityCamera: Has a recording mode (on/off). When the camera is on, recording starts automatically.

3. Polymorphism
- All devices should respond to get_status() in their own way:
    - Example: "Light 'Living Room' is ON at 75% brightness"
    - Example: "Thermostat 'Bedroom' is ON at 20°C"
    - Example: "Camera 'Front Door' is recording"

4. Smart Home Manager
- Create a SmartHome class that:
    - Holds a list of devices.
    - Can add/remove devices.
    - Has a method show_all_statuses() to print the status of every device.

5. Encapsulation
- Make sensitive attributes (like thermostat temperature or camera recording flag) private or protected, and expose them through getters/setters.

6. Demo
- Write a small script at the bottom that:
    - Creates a SmartHome instance.
    - Adds at least one device of each type.
    - Turns devices on/off, changes brightness/temperature, and prints statuses.
"""

class SmartDevice:
    def __init__(self, name: str, status: bool = False):
        self.name = name
        self.status = status
    
    def turn_on(self):
        self.status = True
    
    def turn_off(self):
        self.status = False

    def get_status(self):
        return f"{self.name} is {'ON' if self.status else 'OFF'}"

class Light(SmartDevice):
    def __init__(self, name:str, status: bool = False, brightness: int = 50):
        super().__init__(name, status)
        if brightness < 0 or brightness > 100:
            raise ValueError("Brightness must be between 0 - 100")
        self.brightness = brightness

    def turn_on(self):
        if self.brightness <= 0:
            self.brightness = 50
        self.status = True
    
    def turn_off(self):
        self.status = False

    def get_status(self):
        if self.status:
            return f"Light '{self.name}' is ON at {self.brightness} brightness"
        else:
            return f"Light '{self.name}' is OFF"
    
    def set_brightness(self, value: int):
        if self.status == False:
            return f"Light '{self.name}' is OFF. Turn it ON to set brightness"
        
        if not 0 <= value <= 100:
            return f"Invalid value, please set a value from 0 - 100"
        
        self.brightness = value
        return f"Brightness for '{self.name}' set to '{self.brightness}'"
    
class Thermostat(SmartDevice):
    def __init__(self, name: str, status: bool=False, temperature: int=22):
        super().__init__(name, status)
        if not 16 <= temperature <= 30:
            raise ValueError("Temperature range must be between 16-30°C")
        self.temperature = temperature
    
    def turn_on(self):
        self.status = True
        return "Thermostat is ON"

    def turn_off(self):
        self.status = False
        return "Thermostat is OFF"

    def get_status(self):
        if self.status:
            return f"{self.name} is ON at {self.temperature}°C"
        else:
            return f"{self.name} is OFF"
        
    def set_temperature(self, value):
        if self.status == False:
            return f"{self.name} is OFF. Turn it ON to set temperature"
            
        if not 16 <= value <= 30:
            return f"Invalid value, please set a value between 16-30°C"
        
        self.temperature = value
        return f"Temperature for {self.name} set to {self.temperature}°C"

class SecurityCamera(SmartDevice):
    def __init__(self, name: str, status: bool=False, recording: bool=False):
        super().__init__(name, status)
        self.recording = recording
    
    def turn_on(self):
        self.status = True
        return "Security camera is ON"
    
    def turn_off(self):
        self.status = False
        self.recording = False
        return "Security camera is OFF"
    
    def get_status(self):
        if not self.status:
            return f"{self.name} is OFF and NOT recording"
        elif self.status and not self.recording:
            return f"{self.name} is ON and NOT recording" 
        else:
            return f"{self.name} is ON and recording"
    
    def start_recording(self):
        if not self.status:
            return "Camera is OFF, please turn it ON"
        
        self.recording = True
        return f"Now recording!"
    
    def stop_recording(self):
        if not self.status:
            return "Camera is OFF"
        
        self.recording = False
        return f"Stopped recording!"

class SmartHome:
    def __init__(self):
        self.devices = []
    
    def add_device(self, device):
        self.devices.append(device)
    
    def show_all_statuses(self):
        statuses = []
        for device in self.devices:
            statuses.append(device.get_status())
        return "\n".join(statuses)


light = Light("Lamp", True, 100)
thermo = Thermostat("AC", True)
camera = SecurityCamera("Front Door", False, False)

device = SmartHome()
device.add_device(light)
device.add_device(thermo)
device.add_device(camera)

print(device.show_all_statuses())
