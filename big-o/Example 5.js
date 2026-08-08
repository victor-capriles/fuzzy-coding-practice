// Problem: Example 5
// Soruce: Book
// Date: 2025-08-06
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function printUnorderedPairs(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            for (let k = 0; k < 100000; k++) {
                console.log(arrayA[i], arrayB[j]);
            }
        }
    }
}

// Q. What is the runtime?
// A. O(ab). Because we loop through arrayA, and for every element in arrayA, we loop
// through all of arrayB to compare. So arrayA = n; arrayB = m. O(n * m) becomes O(ab).
// k = 100000 is just a constant and we can drop it.
// the space complexity is O(1), as we are not creating a new array, we are just counting.
