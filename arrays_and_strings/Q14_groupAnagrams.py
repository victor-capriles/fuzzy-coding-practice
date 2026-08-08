# Problem: Group Anagrams
# Source: Leetcode
# Date: 2025-09-10
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
"""
from typing import List

strs = ["eat","tea","tan","ate","nat","bat"]

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    # create hash map to store groups, each key is a sorted version of a word
    # each value is a list of words that match the sorted pattern
    groups = {}

    # loop through each word (current_string)
    for current_string in strs:
        # sort the word to get dict key
        # sort each character and join them back together
        sorted_string = "".join(sorted(current_string))

        # add the word in the correct group check if
        if sorted_string in groups:
            # if sorted form already exist in dictionary, append current word
            groups[sorted_string].append(current_string)
        else:
            # if doesn't exist we create a new list with that word
            groups[sorted_string] = [current_string]
        
    # return group values
    return list(groups.values())


    

