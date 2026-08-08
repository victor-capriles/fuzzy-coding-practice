// Problem: Example 1
// Soruce: Book
// Date: 2025-07-28
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed

function foo(array) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    for (let i = 0; i < array.length; i++) {
        product += array[i];
    }
    
    console.log(`${sum}, ${product}`);
}

// Q. What is the runtime?
// A. O(n). Because we are passing in a linear manner through the array. Once for the sum and
//    once for the product. If the size of the array increases then the runtime will also increase.
