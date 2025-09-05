// Problem: Partition
// Soruce: Crack code Book
// Date: 2025-09-03
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed

/*
### Partition

Write code to partition a linked list around a value x, such that all nodesless than x
come before all nodes greater than or equal to x. (Important. The partition element x can
 appear anywhere in the "right partition"; it does not need to appear between the left and
 right partitions. The additional spacing in the example below indicates the partition. Yes, 
 the output below is one of many valid outputs!)

 Example:

 Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
 Output: 3 -> 1 -> 2     ->        10 -> 5 -> 5 -> 8  
*/

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function partition(head, x) {
    if (!head) {
        return null;
    }
    // create 2 separate lists ( < x and x >) and keep track of them
    let beforeHead = null;            // points to the start of the list with vales < x
    let beforeTail = null;            // points to the end of that list
    let afterHead = null;             // same but for => x
    let afterTail = null;

    // walk through the list one node at a time
    let current = head;

    // loop through every node
    /* store the next node in a variable called nextNode, because
    we are goint to cut the link to the rest of the list using
    current.next = null
    */
    while (current) {
        let nextNode = current.next;
        current.next = null;

        // where does current node go
        // node < x
        if (current.value < x) {
            if (!beforeHead) {                 // if this is the first small value node                                    
                beforeHead = current;          // set as head and tail
                beforeTail = beforeHead;
            } else {
                beforeTail.next = current;    // if its not the first we add it to the end of the list
                beforeTail = current;         // and move before tail forward
            }
            // node >= x
        } else {
            if (!afterHead) {
                afterHead = current;
                afterTail = afterHead;
            } else {
                afterTail.next = current;
                afterTail = current;
            }
        }
        // move to the next node in the original list
        current = nextNode;
    }

    // stich both lists
    if (!beforeHead) {
        return afterHead;           // return afteHead list if no small x is found
    }

    beforeTail.next = afterHead;    // if found connect the end of "before" with the start of "after"

    return beforeHead;
}

// Create linked list from array
function buildList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

// Print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

const head = buildList([3, 5, 8, 5, 10, 2, 1]);
const x = 5;

const result = partition(head, x);
printList(result);  // Expected: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10

