# Problem: Top K elements
# Source: Leetcode
# Date: 2025-09-10
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
"""

from typing import List

nums = [1, 2, 1, 1, 2, 3]
k = 2

def topKFrequent(nums: List[int], k: int) -> List[int]:
    # creates an empty dic to store each number frequency
    count = {}
    # loop through every number in nums and count how many times it appears
    # storing that in the dictionary
    for number in nums:
        count[number] = 1 + count.get(number, 0)

    # create a list made of empty lists, with length + 1 where  index c
    # will hold all numbers that appear c times
    number_frequency = [[] for i in range(len(nums) + 1)]
    # loop through the frequency dict and place each number into 
    # the bucket that matches its count
    for number, cnt in count.items():
        number_frequency[cnt].append(number)
    
    # create an empty result list. Then iterate i from the highest 
    # possible frequency down to 0
    # for every number in the bucket at frequency i add it to result
    # as soon we have collected k, return it
    res = []
    for i in range(len(number_frequency) -1, 0, -1):
        for number in number_frequency[i]:
            res.append(number)
            if len(res) == k:
                return res

    
    
