// Problem: Example 6
// Soruce: Cracking code Book
// Date: 2025-08-06
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

let arr = [1, 2, 3, 4, 5];

function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let other = array.length - i - 1; // =  4 
        let temp = array[i] // array[0] = 1 | store the left value
        array[i] = array[other]; // 5 | move right to left
        array[other] = temp; // 1 | moved stored left to right
    }
}

reverse(arr);
console.log(arr);

// Q. What is the runtime?
// A. O(n). Because we pass through the array in a linear manner, we drop the constant /2.
// So even though we are only looping over only half the array, the number of operations
// still grows linearly with the size of the input.
// The space complexity is O(1) as we work in only that array, we aren't saving operations
// in other places.