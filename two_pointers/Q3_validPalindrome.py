# Problem: Valid Palindrome
# Source: Leetcode
# Date: 2025-09-14
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
"""

s  = "A man, a plan, a canal: Panama"

def isPalindrome(s:str) -> bool:
    # clean input. use .lower to make sure all lower case, filter characters with isalnum then join to remove space
    cleaned_string = ''.join(character.lower() for character in s if character.isalnum())

    # starts at the beginning of string
    left_pointer = 0
    # starts at the end of the string
    right_pointer = len(cleaned_string) - 1

    # loop through characters until they cross
    while left_pointer < right_pointer:
        # compare the characters (left and right) if they dont match is not a palindrome
        if cleaned_string[left_pointer] != cleaned_string[right_pointer]:
            return False
        
        # move pointers after a match
        left_pointer += 1
        right_pointer -= 1

    return True

print(isPalindrome(s))