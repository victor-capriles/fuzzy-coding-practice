// Problem: Example 11
// Soruce: Crack code Book
// Date: 2025-08-08
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

let n = 3

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));

/*
Q. the following code computes n! (n factorial). What is its time complexity?
A. O(n). The function makes one call (recursive) per number from n down to 1, so
it does n total calls.
Space complexity. Each recursive call adds to the stack so it makes it O(n).
*/

// iterative solution
function factorial(n) {
    if (n < 0) {
        return -1;
    }

    let result = 1;

    for (let i = 2; i < n; i++) {
        result *= i;
    }

    return result;
}

// Space complexity because its a for loop it makes it constant so O(n).