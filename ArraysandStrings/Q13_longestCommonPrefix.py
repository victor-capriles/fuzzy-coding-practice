# Problem: Longest Common Prefix
# Source: Leet code
# Date: 2025-09-08
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Longes Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
"""
from typing import List

def longesCommonPrefix(strs: List[str]) -> str:
        
    prefix = strs[0]

    for i in range(len(prefix)):
        character = prefix[i]
        for j in range(len(strs)):
            if i >= len(strs[j]) or strs[j][i] != character:
                return prefix[:i]
    
    return prefix