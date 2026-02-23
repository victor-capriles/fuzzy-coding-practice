# Problem: Two Sum!!!
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

nums = [2,7,11,15]
target = 9

### Time complexity = O(n^2) using nested loop
### Space complexity = O(1)
def twoSum(nums: List[int]) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i , j]
    return []

### Time complexity = O(n)
### Space complexity = O(n)
def twoSumHash(nums: List[int]) -> List[int]:
    # create an empty dictionary that will store numbers we
    # have already seen
    seen_number = {}
    
    # loop through the list, so i is the current index 
    # and num is the current value
    for i, num in enumerate(nums):
        # compute the complement
        complement = target - num
        # check if complement exist in dictionary
        if complement in seen_number:
            # if we have we return index of the complement and current index
            return [seen_number[complement], i]
        # otherwise, store current number in the diciotnary along its index
        seen_number[num] = i
        # if no solution, return empty list
    return []
        
