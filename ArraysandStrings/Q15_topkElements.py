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
    # empty dictionary to count how often each number appears in nums
    element_freq = {}

    # count the numbers in nums
    for number in nums:
        # start its count at 1 if its not in the dictionary yet
        # or increment its existing count by 1
        element_freq[number] = element_freq.get(number, 0) + 1

        # create an empty list of lists, one for each possible frequency
        freq_buckets = [[] for _ in range(len(nums) + 1)]

        # now take each number and frequency, from dictionary
        for number, frequency in element_freq.items():
            # and append into the right bucket
            freq_buckets[frequency].append(number)

        # prepare an empty list to store our final top k results
        result = []

        # reverse loop, because we are checking the highest frequency first
        for frequency in range(len(nums), 0, -1):
            # if there are any numbers in the bucket
            if freq_buckets[frequency]:

                # add each number from the bucket into our result list
                for number in freq_buckets[frequency]:
                    result.append(number)

                    # if we have added k elements, return list
                    if len(result) == k:
                        return result
    
    # fallback
    return result

result = topKFrequent(nums, k)
print(result)