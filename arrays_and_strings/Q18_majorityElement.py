# Problem: Majority Element
# Source: Leetcode
# Date: 2025-09-13
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
"""

from typing import List

nums = [1,2,2,1,1,1,2,1]

def majorityElement(nums: List[int]) -> int:
    # store the current potential majority
    candidate_element = 0
    # counter that tracks how confident you are in current candidate
    candidate_count = 0

    # loop through each number in the list
    for number in nums:
        # if current candidate count is zero, reset the candidate to the current number and start again
        if candidate_count == 0:
            candidate_element = number
            candidate_count = 1
        # if current number matches the candidate, increment the count
        elif candidate_element == number:
            candidate_count += 1
        # decrease the count if it doesnt match
        else:
            candidate_count -= 1
    
    # verify candidate is majority by counting
    candidate_frequency = nums.count(candidate_element)

    # if candidate appears more than n//2 times return
    if candidate_frequency > len(nums) // 2:
        return candidate_element
    else:
        return False
    
result = majorityElement(nums)
print(result)