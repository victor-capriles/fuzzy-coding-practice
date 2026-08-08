// Problem: Delete Middle Node
// Soruce: Crack code Book
// Date: 2025-09-02
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
### Delete Middle Node.

Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node.

Example:

Input: the node c form the linked list a -> b -> c -> d -> e -> f
Output: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
*/

class ListNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

function deleteNode(node) {
    if (!node || !node.next)  return false;

    let next = node.next;

    node.value = next.value;
    node.next = next.next
    return true;
}

// Helper to print list
function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.value + ' -> ');
        current = current.next;
    }
    console.log('null');
}

// Create list a -> b -> c -> d -> e -> f
let a = new ListNode('a');
let b = new ListNode('b');
let c = new ListNode('c');
let d = new ListNode('d');
let e = new ListNode('e');
let f = new ListNode('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a); // a -> b -> c -> d -> e -> f -> null

deleteNode(c); // Delete 'c'

printList(a); // a -> b -> d -> e -> f -> null
