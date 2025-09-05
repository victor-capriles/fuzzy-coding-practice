// Problem: Sum Lists
// Soruce: Crack code book
// Date: 2025-09-04
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
### Sum Lists.

You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1's digit is at the head
of the list. Write a function that adds the two numbers and returns the sum as a linked
list. Note: you are not allowed to "cheat" and convert the linked list to an integer.
*/

class ListNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

function sumNumbers(l1, l2) {
    if(!l1 || !l2) {
        return null;
    }
    
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.value : 0;
        let val2 = l2 ? l2.value : 0;

        let sum = val1 + val2 + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

function buildLinkedList(arr) {
    let head = new ListNode (arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head
}

function printLinkedList(head) {
    let current = head;
    const result = [];

    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "))
}

// Create inputs: (7 -> 1 -> 6) + (5 -> 9 -> 2) = (2 -> 1 -> 9)
let l1 = buildLinkedList([7, 1, 6]);  // 617
let l2 = buildLinkedList([5, 9, 2]);  // 295

let sum = sumNumbers(l1, l2);         // should be 912 → [2, 1, 9]
printLinkedList(sum);                // Output: 2 -> 1 -> 9
