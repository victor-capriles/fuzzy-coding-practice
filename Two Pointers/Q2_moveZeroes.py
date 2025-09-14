# Problem: Move Zeroes
# Source: Leetcode
# Date: 2025-09-13
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
"""
from typing import List

numbers = [0,1,0,3,12]

class Solution:
    def moveZeroes(self, numbers: List[int]) -> None:
        # tracks the position where the next non-zero should go
        tracking_pointer = 0
        # parse through the entire list element by element
        walking_pointer = 0

        # loop through the list while we haven't seen all the elements
        while walking_pointer < len(numbers):
            # check if elements is non-zero
            if numbers[walking_pointer] != 0:
                # if it is, then swap at to the front of the list by moving the current element in tracking with current
                numbers[tracking_pointer], numbers[walking_pointer] = numbers[walking_pointer], numbers[tracking_pointer]
                # after placing a non-zero move one step
                tracking_pointer += 1
            
            # regardless of moving an element, move one step
            walking_pointer += 1


solution = Solution()
solution.moveZeroes(numbers)
print(numbers)
