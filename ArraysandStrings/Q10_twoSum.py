# Problem: Two Sum
# Source: Leet code
# Date: 2025-09-06
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Two Sum.

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
"""
from typing import List

# SOLUTION with O(n**2)
""""
def twoSum(self, nums: List[int], target: int) -> List[int]: 
    # write code here
    for i in range (len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
"""  
# Solution with O(n) using a hash map
def twoSum(self, nums: List[int], target: int) -> List[int]:
    # create an empty dic
    store_index = {}

    # loop throught the list of nums
    for i in range(len(nums)):
        # get the number at index[i] and store in num
        num = nums[i]
        # compute complement by substracting num from target
        complement = target - num
        # check if complement exist already in dictionary
        if complement in store_index:
            # return indices o the two numbers
            return [store_index[complement], i]
        
        # if it isn't add the current number to the dictionary
        store_index[num] = i