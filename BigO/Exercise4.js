// Problem: Exercise 4
// Soruce: Crack code Book
// Date: 2025-08-17
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function div(a, b) {
    
    let count = 0;
    let sum = b;

    while (sum <= a) {
        sum += b;
        count++;
    }
    return count;
}

/*
Q.The following code performs integer division. What is its runtime (assume a and b are both positive)?
A. time is O(a/b) because we loop a/b times, and space is O(1).
*/

console.log(div(6, 2));