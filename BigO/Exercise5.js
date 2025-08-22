// Problem: Exercise 5
// Soruce: Crack code Book
// Date: 2025-08-18
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


function sqrt(n) {
    // write code here
    return sqrt_helper(n, 1, n);
}

function sqrt_helper(n, min, max) {
    if (max < min) return -1;

    let guess = Math.floor((min + max) / 2);
    if (guess * guess == n) {
        return guess;
    } else if (guess * guess < n) {
        return sqrt_helper(n, guess + 1, max);
    } else {
        return sqrt_helper(n, min, guess - 1);
    }
}

console.log(sqrt(16));

/*
The following code computes the [integer] square root of a number. If the number is not
a perfect sqaure (there is no integer square root) then it returns -1. It does by 
successive guessing. If n is 100, first guesses 50. Too high? Try something lower - halfway
betweent 1 and 50. What is its runtime?

Both time and space complexity are O(log n). We are doing a binary search which halves the 
range each time, and for space, its also log n due to the recursive stack.
*/