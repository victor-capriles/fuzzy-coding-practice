// Problem: String Rotation
// Soruce: Crack code book
// Date: 2025-08-29
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed

/*
### String rotation.

Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
one call to isSubstring (e.g., "waterbottle is a rotation erbottlewat").

*/

function isRotation(s1, s2) {
    //edge cases
    //check if s1 or s2 are empty strings
    if (s1.length === 0 || s2.length === 0) {
        return false;
    }

    if (s1.length !== s2.length) {
        return false;
    }

    const s1s1 = s1 + s1;
    return (isSubstring(s1s1, s2));

}

function isSubstring(str1, str2) {
    return str1.includes(str2);
}

console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("abcdef", "defabc"));           // true
console.log(isRotation("abcdef", "efabcd"));           // true
console.log(isRotation("abcdef", "abcfde"));           // false
console.log(isRotation("abc", "abcd"));                // false
console.log(isRotation("", ""));                       // false
