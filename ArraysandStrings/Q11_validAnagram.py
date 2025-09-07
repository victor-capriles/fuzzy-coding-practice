# Problem: Valid Anagram
# Source: Leet code
# Date: 2025-09-07
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Valid Anagram.

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
"""
#####

"""def is_anagram_bruteforce(s1, s2):
    if len(s1) != len(s2):
        return False
    
    # convert second word to a list so, we can mutate it
    second_word_list = list(s2)

    for char in s1:
        character_found = False
        # check wether current character exist in second word list
        for i in range(len(second_word_list)):
            if char == second_word_list[i]:
                second_word_list.pop(i)
                character_found = True
                break
        
        # return false if no character in s1 is found
        if not character_found:
            return False
    
    # check if all characters were matched and removed
    if not second_word_list:
        return True
    else: 
        return False
"""

#####

def isAnagram_sorted(s: str, t: str) -> bool:
    if sorted(s) == sorted(t):
        return True
    else:
        return False

# Time complexity is O(n log n) due to sorting and space complexity is O(n)
# because sorting creates a new list.

#####

def isAnagram_hash(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    # create empty dict for both strings
    # we want to count how many values are per key
    s_count = {}
    t_count = {}

    # pythonic way
    for char in s:
        s_count[char] = 1 + s_count.get(char, 0)
    
    for i in range(len(t)):
        t_count[t[i]] = 1 + t_count.get(t[i], 0)

    # compare counter
    if s_count == t_count:
        return True
    else:
        return False
    
# Time complexity is O(n) and space complexity is O(n)