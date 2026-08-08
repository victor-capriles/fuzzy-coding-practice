// Problem: Example 16
// Soruce: Crack code Book
// Date: 2025-08-15
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


function powerOf2(n) {
    if (n < 1) {
        return 0;
    } else if (n == 1) {
        console.log(1);
        return 1;
    } else {
        let prev = powerOf2(n / 2);
        let curr = prev * 2;
        console.log(curr);
        return curr;
    }
}

powerOf2(16);

/*
Q. What's the runtime & space complexity?
A. Time -> O(log n). Because we have the problem size each step from 16 -> 8, not 16 -> 15.
   Space -> O(log n). Because the recursion stack only goes log n frames deep.
*/