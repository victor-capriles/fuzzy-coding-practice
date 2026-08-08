# Problem: Encode and Decode Strings
# Source: Leetcode
# Date: 2025-09-11
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
"""

s = "3[a2[c]]"

def decodeString(s: str) -> str:
    # list used as a stack to keep track of previous strings and repeat counts
    string_stack = []
    # builds up the current piece of the decoded string
    current_string = ''
    # holds the number we are reading, could be multiple digits like 10[a]
    current_number = 0

    # loop through each character
    for character in s:
        # if its a digit, 
        # multiply by 10 to handle numbers with more than a digit (ex: 12[a] becomes 12, not 1 and 2)
        if character.isdigit():
            current_number = current_number * 10 + int(character)

        # if its an opening bracket
        # push the current string and number onto stack, and reset the string and number 
        # because we are going to start decoding the substring inside the bracket
        elif character == '[':
            string_stack.append((current_string, current_number))
            current_string = ''
            current_number = 0
        
        # if its a closing bracket
        # pop from the stack the previous string and how many times to repeat
        # combine them
        elif character == ']':
            previous_string, repeat_count = string_stack.pop()
            current_string = previous_string + current_string * repeat_count
        
        # if its a regular letter
        else:
            current_string += character
    
    return current_string 

result = decodeString(s)
print(result)