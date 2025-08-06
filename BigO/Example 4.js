// Problem: Example 4
// Soruce: Book Cracking code
// Date: 2025-07-31
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function printUnorderedPairs(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] < arrayB[j]) {
                console.log(arrayA[i], arrayB[j]);
            }
        }
    }
}

// Q. What is the runtime?
// A. O(ab). Because we loop through arrayA, and for every element in arrayA, we loop
// through all of arrayB to compare. So arrayA = n; arrayB = m. O(n * m) becomes O(ab).
// the space complexity is O(1).