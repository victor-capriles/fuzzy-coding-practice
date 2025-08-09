// Problem: Example 12
// Soruce: Crack code Book
// Date: 2025-08-08
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function permutation(str, prefix = "") {
    if (str.length == 0) {
        console.log(prefix);
    } else {
        for (let i = 0; i < str.length; i++) {
            const remaining = str.slice(0, i) + str.slice(i + 1);
            permutation(remaining, prefix + str[i]);
        }
    }
}

permutation("");

// str.slice(0, i) = everything before the chose letter
// str.slice(i + 1) = everything after the chosen letter
// concatenate them, the string wiouth the chosen letter

/* 
Q. What's the runtime?
A. it's O(n * n!)


*/