# Problem: group anagrams
# Source: leetcode
# Date: 2026-02-22
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Given an array of strings strs, group all anagrams together into sublists.
You may return the output in any order.

An anagram is a string that contains the exact same characters as another string,
but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:

Input: strs = ["x"]
Output: [["x"]]

Example 3:

Input: strs = [""]
Output: [[""]]

Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
"""

from typing import List
from collections import defaultdict

### Time complexity = O(n * k long k)
### Space complexity = O(n * m)
def groupAnagramsSort(strs: List[str]) -> List[List[str]]:
    groups = defaultdict(list)  # creates automatically the empty list if no key exist

    for string in strs:
        sorted_string = tuple(sorted(string)) # sort creates the signature for the anagram. we use tuple so it can be used a as key
        groups[sorted_string].append(string)  # place the original word into the group with its sorted signature

    return list(groups.values())

### Time complexity = O(n * m)
### Space complexity = O(n * m)
def groupAnagramsHash(strs: List[str]) -> List[List[str]]:
    res = defaultdict(list)

    for s in strs:
        count = [0] * 26

        for c in s:
            count[ord(c) - ord("a")] += 1
        
        res[tuple(count)].append(s)
    
    return list(res.values()) 
