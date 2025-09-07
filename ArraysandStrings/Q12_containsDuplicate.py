# Problem: Contains Duplicate
# Soruce: Leet code
# Date: 2025-09-07
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 
Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
"""

from  typing import List

### O(n**2) brute force approach
def containsDuplicate (nums: List[int]) -> bool:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    
    return False

### O(n log n) using sorting algorithm
def containsDuplicateSort(nums: List[int]) -> bool:
    nums.sort()

    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    
    return False

### O(n) using hash set, also O(n) for space as we create a hash with the seen values
def containsDuplicateSet(nums: List[int]) -> bool:
    seen = set()

    for num in nums:
        if num in seen:
            return True
        seen.add(num)

    return False