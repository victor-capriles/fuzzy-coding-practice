// Problem: Example 13
// Soruce: Crack code Book
// Date: 2025-08-09
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

let n = 4;

function fib(n) {
    if (n <= 0) return 0; // for invalid or zero case
    else if (n == 1) return 1; // stops recursion for the first fibonacci number.
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(n));

/* 
Q. What's the runtime?
A. Runtime is O(2**n). Because there are 2 branches per call, and we go as deep as N,
therefore the runtime is O(n**2).

*/