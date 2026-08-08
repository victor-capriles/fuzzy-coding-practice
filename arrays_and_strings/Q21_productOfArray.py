# Problem: Produc of Array Except Self
# Source: 
# Date: 2026-02-27
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Description
Given an integer array nums, return an array output where output[i] is 
the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Example 2:
Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]

Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20
"""

from typing import List

def productExceptSelf(nums: List[str]) -> List[int]:
    res = [1] * (len(nums))
    
    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
    postfix = 1
    for i in range(len(nums)):
        res[i] *= postfix
        postfix *= nums[i]
    return res