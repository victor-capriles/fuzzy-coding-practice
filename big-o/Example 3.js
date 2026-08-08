// Problem: Example 3
// Soruce: Book Cracking code
// Date: 2025-07-31
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function printUnorderedPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

// Q. What is the runtime?
// A. O(n**2). Because even if the inner loop does less operations we are
// still doing about n*n operations in total, so the time complexity stays in
// the quadratic family. The space complexity would be O(1).