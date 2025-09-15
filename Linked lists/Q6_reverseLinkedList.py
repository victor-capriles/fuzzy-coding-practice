# Problem: Reverse Linked List
# Source: Leetcode
# Date: 2025-09-15
# Approach: Brief idea of how you tackled the problem 
# Status: Solved, In progress, Review needed 

"""
Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
 
Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
"""

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # points to the node behind the current one in the reversed list, 
        # initialize with None because its the new tail
        previous_node = None
        # starts at the head of the original list
        current_node = head

        # loop until we have walked through every node
        while current_node is not None:
        # temporarily save the next node before changing -> pointer. Because we lose access to it
            next_node = current_node.next
            # make the current node point backward
            current_node.next = previous_node
            # move previous node forward so it now points to the current node
            previous_node = current_node
            # move current node forward to the node we saved earlier
            current_node = next_node
        
        # return current_node is None and previous is pointing to the head
        return previous_node