// Problem: Example 10
// Soruce: Crack code Book
// Date: 2025-08-08
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

let n = 5

function isPrime(n) {
    for (let x = 2; x * x <=n; x++) { //we ensure to only check numbers <= √n
        if (n % x == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(n))

/* Q. What is the runtime of this function.

A. The runtime would be O(√n). Because the number of operations is
proportional to √n.
Time complexity is O(1).

*/
