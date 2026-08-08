// Problem: Example 2
// Soruce: Book
// Date: 2025-07-28
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function printPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`${array[i]}, ${array[j]}`);
        }
    }
}

// Q. What is the runtime?
// A. O(n**2). Since there's a nested loop, and both loops go from 0 to `n`, we are doing
// `n*n` operations. Thus for every element in the array, we are pairing it with every other
// element (including itself).
