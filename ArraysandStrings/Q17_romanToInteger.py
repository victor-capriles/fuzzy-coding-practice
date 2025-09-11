# Problem: Roman to Integer
# Source: Leetcode
# Date: 2025-09-11
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
"""

s = 'IV'

def romanToInteger(s: str) -> int:
    # map roman to values
    roman_values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    # final result
    integer_value = 0
    # previous integer, tracks the value of the symbol we saw before the current symbol
    previous_value = 0

    # loop over the characters
    for i in range(len(s)):
        # look up the number of that character in the dictionary
        current_value = roman_values[s[i]]
    
        # check if substract
        # add a guard i bigger than 0 to avoid always subtractive case
        # if it substract 
        if current_value > previous_value and i > 0:
            integer_value += current_value - 2 * previous_value

        # if current value is not bigger than previous add the value
        else:
            integer_value += current_value
        
        # update previous value for the next loop
        previous_value = current_value
    return integer_value
    
    
result = romanToInteger(s)
print(result)
