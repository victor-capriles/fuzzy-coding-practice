"""
Write a program that does the following in order:
1. Asks the user to enter a number “x”
2. Asks the user to enter a number “y”
3. Prints out number “x”, raised to the power “y”.
4. Prints out the log (base 2) of “x”.
"""
import numpy as np

x = int(input("enter a number: "))
y = int(input("enter another number: "))
result = (x**y)
print(result)
log_result = np.log2(x)
print(log_result)