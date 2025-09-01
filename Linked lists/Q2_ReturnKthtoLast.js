// Problem: Return Kth to Last
// Soruce: Crack code Book
// Date: 2025-09-01
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/* 
### Return Kth to Last

Implement an algorithm to find the kth to last element of a singly linked list.

*/

class ListNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

function kthToLast(head, k) {
    //edge case
    if (!head || k < 1 ) return null;       //head is invalid or k is too small

    let length = 0;
    let current = head;

    // count length of linked list
    while (current) {                       // as long as we havent hit the end
        length++;                           // count this node
        current = current.next;             // move to the next node
    }

    // find kth element
    let kth_element = length - k;
    //edge case
    if (kth_element < 0) return null;       // k is too big

    current =  head;
    for (let i = 0; i < kth_element; i++) {
        current = current.next
    }
    return current;
}   

// test
let a = new ListNode("A");
let b = new ListNode("B");
let c = new ListNode("C");
let d = new ListNode("D");
let e = new ListNode("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLast(a, 2).value);