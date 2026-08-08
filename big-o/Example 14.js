// Problem: Example 14
// Soruce: Crack code Book
// Date: 2025-08-14
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function allFib(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i + ':' + fib(i));
    }
}

 function fib(n) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    return fib(n - 1) + fib(n -2)
}

/*
Q. Whats the runtime and space complexity?
A. the function fib has a runtime of O(2**n) as it branches twice per call. Then, the 
outer for loop makes n + 1 calls. But because the cost grows geometrically, the dominant
term is O(2ⁿ⁺¹ - 1), which simplifies to O(n**2) in big O.

*/

