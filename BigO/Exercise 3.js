// Problem: Exercise 3
// Soruce: Crack code Book
// Date: 2025-08-15
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function mod(a, b) {
    if (b <= 0) {
        return -1;
    }
    const div = a / b;
    return a - div * b;
}

console.log(mod(6, 3)); // should print 0

/*
Q. The following code computes a % b. What is its runtime?
A. Its just an operation so both time and space complexity = O(1).
*/