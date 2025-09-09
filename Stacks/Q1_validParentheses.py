# Problem: Valid Parentheses
# Source: Leetcode
# Date: 2025-09-09
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
"""

s = "(()"

def isValid(s: str) -> bool:
    # empty list (stack)
    stack = []
    # hash for mapping. Key is closed ones because we check if they are present
    mapping_parentheses = {')':'(', ']':'[', '}':'{'}

    #loop for each char in s
    for character in s:
        # if char is an opening bracket append
        if character in mapping_parentheses.values():
            stack.append(character)

        # if therese a closing bracket
        elif character in mapping_parentheses:
            # check if stack is empty
            if not stack:
                # if yes
                return False
                    
            # if stack isnt empty we pop top item
            top_character = stack.pop()
                
            # check if pop open character match expected one for closing character
            if mapping_parentheses[character] != top_character:
                    # if not return false
                    return False
                    
        
    # return true if stack empty
    return True if not stack else False

print(isValid(s))
        
