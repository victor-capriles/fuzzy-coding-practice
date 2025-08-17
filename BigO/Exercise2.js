// Problem: Exercise 2
// Soruce: Crack code book
// Date: 2025-08-15
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

// write code here

function power(a, b) {
    console.log(`calling power(${a}, ${b})`)
    if (b < 0) {
        return 0;
    } else if (b == 0) {
        return 1;
    } else {
        return a * power(a, b - 1);
    }
}

console.log(power(2, 4));

/*
Q. The following code computes a**b. What is its runtime?
The time complexity is O(b) each recursive call decrases by - 1 each time.
For space it would also have a complexity = O(b), because each call is saved
one by one in the stack.
*/