"""
write a program at the top of your file import numpy
- write a line that sets a variable named x to 5
- write a line that sets a variable named y to 8
- add variables x and y, and save the result to a variable named z
- now save the result of this command; numpy.log2(z) to a variable named a
"""

import numpy as np

x = 5
y = 8

z = x + y
a = np.log2(z)
print(a)