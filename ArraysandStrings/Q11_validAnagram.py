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

### time complexity = O(s log s + t log t)
### space complexity = O(1)
def sortedIsAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    return sorted(s) == sorted(t)

### time complexity = O(s + t)
### space complexity = O(1)
def hashIsAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    countS, countT = {}, {}

    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)
    return countS == countT
