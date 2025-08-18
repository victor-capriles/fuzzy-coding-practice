// Problem: Is Unique
// Soruce: Crack code book
// Date: 2025-08-18
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Is Unique. Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures? 

*/

function isUnique(str) {
    if (str.length > 128) {
        return false;
    }

    if (str.length === 0) {
        return true;
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// test cases
console.log(isUnique(""));
console.log(isUnique("abcb"));
console.log(isUnique("abcd"));

/*
Time: nested loop so O(n**2)
Space: is O(1) we aren't storing any values or creating new arrays
*/