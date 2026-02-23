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

from typing import List

### Time complexity = O(n**2) brute force approach
### Space complexity = O(1) we didnt store anything in memory nor created a new array
def containsDuplicate(nums: List[int]) -> bool:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False

### Tests
assert containsDuplicate([1,2,3,1]) is True
assert containsDuplicate([1,2,3,4]) is False
print("ok, brute force approach")

### Time complexity = O(n log n) using sorting algorithm
### Space complexity = O(1) we are mutating the input directly, we didnt create a new array
def containsDuplicateSort(nums: List[int]) -> bool:
    nums.sort()

    for i in range (1, len(nums)):
        if nums[i] == nums[i -1]:
            return True
    return False

### Tests
assert containsDuplicateSort([1,5,3,2,1]) is True
assert containsDuplicateSort([1,2,5,3,4]) is False
print("ok, sorted approach")

### Time complexity = O(n) Look ups are O(1) but we do that n times
### Space complexity = O(n) because we stored the seen values
### in this solution we don't loop over the index, its the actual value of the element

def containsDuplicateHash(nums: List[int]) -> bool:
    # create an empty set to keep track of number we 
    # have already seen
    seen = set()
    # iterate through each number in the array
    for num in nums:
        # if the current number is already in set
        if num in seen:
            # return true
            return True
        # otherwise add current number to set
        seen.add(num)
    # return
    return False

### Tests
assert containsDuplicateHash([1,2,5,3,6,2]) is True
assert containsDuplicateHash([1,3,5,2,6,7]) is False
print("ok, hash set approach")