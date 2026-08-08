// Problem: Exercise 1
// Soruce: Crack code Book
// Date: 2025-08-09
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

let a = 2;
let b = 3;

function product(a, b) {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return sum;
}

console.log(product(a, b));

/* 
Q. What's the runtime?
A. The runtime is O(n). It's just a simple operation
with a for loop.

*/