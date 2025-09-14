# Problem: Merge Sorted Array
# Source: Leetcode
# Date: 2025-09-13
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
"""

nums1 = [1,2,3,0,0,0] 
m = 3
nums2 = [2,5,6]
n = 3

from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # figure out the length of the final merged array
        merged_array_length = m + n

        # create pointers
        pointer1 = m - 1
        pointer2 = n -1
        merged_array_pointer = merged_array_length - 1

        # merge the arrays in reverse. As long as both pointers are pointing to elements
        while pointer1 >= 0 and pointer2 >= 0:
            # compare values
            # we alaways take the largest value and place it at the end of nums1 and then we move pointers
            if nums1[pointer1] > nums2[pointer2]:
                nums1[merged_array_pointer] = nums1[pointer1]
                pointer1 -= 1
            else:
                nums1[merged_array_pointer] = nums2[pointer2]
                pointer2 -= 1
            merged_array_pointer -= 1

        # copy remaining elements in nums2 if necessary
        while pointer2 >= 0:
            nums1[merged_array_pointer] = nums2[pointer2]
            # move pointer position
            pointer2 -= 1
            merged_array_pointer -= 1

solution = Solution()
solution.merge(nums1, m, nums2, n)
print(nums1)
