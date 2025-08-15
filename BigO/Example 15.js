// Problem: Example 15
// Soruce: Crack code Book
// Date: 2025-08-14
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function allFib(n) {
    let memo = new Array(n + 1); //creates a memoization array to store fib results

    for (let i = 0; i < n; i++) {
        console.log(i + ":" + fib(i, memo)); //for each i, compute(i) with memo help
    }
}

function fib(n, memo) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    else if (memo[n] > 0) return memo[n]; //if we have already compute it, use that

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); //otherwise compute and store it
    return memo[n];
}

/*
Q.What's the runtime and space complexity?
A. Time is O(n). Because each number from 0 to n is computed once thanks to memoization.
for space also O(n). Each call uses a small amount of stack space, but thanks to 
memoization, the max stack depth is O(n).
*/