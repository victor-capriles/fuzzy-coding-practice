// Problem: Remove Dups
// Soruce: Crack code Book
// Date: 2025-08-30
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
### Remove Dups

Write code to remove duplicates from an unsorted linked list.

*/

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function removeDuplicates(head) {
    if (!head) return null;

    // buffer to track values
    const seen = new Set ();
    let current = head;
    let prev = null;
    
    while (current) {
        if (seen.has(current.value)) {
            prev.next = current.next;
        } else {
            seen.add(current.value);
            prev = current;
        }

        current = current.next;
    }

    return head;
}

// helper function to print Linked List
function printList(head) {
    let current = head;
    const result = [];
    
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(' → '));
}

// helper function to build a linked list from an array
function buildLinkedList(values) {
    const head = new LinkedListNode(values[0]);
    let current = head;
    
    for (let i = 1; i < values.length; i++) {
        current.next = new LinkedListNode(values[i]);
        current = current.next;
    }
    return head;
}

// test
const values = [1, 2, 3, 2, 4, 3, 5];
const head = buildLinkedList(values);

console.log("Original list");
printList(head);

const deduped = removeDuplicates(head);

console.log("After removing duplicates");
printList(deduped)
