// Problem: CheckPermutation
// Soruce: Crack code Booj
// Date: 2025-08-22
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


/*
Check Permutation. Given two strings, write a method to decide if one is a permutation of the other.
*/


function checkPermSort(str1, str2) {
    // if strings aren't same size
    if (str1.length !== str2.length) {
        return false;
    }

    //if a string is empty
    if (str1.length === 0 || str2.length === 0) {
        return false;
    }

    //if both strings are empty
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }

    //first we split the string into characters - then sort - then join them back
    const sorted1 = str1.split("").sort().join("");
    const sorted2 = str2.split("").sort().join("");

    return sorted1 === sorted2;
    
}

//test cases
console.log(checkPermSort(" ", " "));               // true
console.log(checkPermSort("abc", "bca"));         // true
console.log(checkPermSort("hello", "ollhe"));     // true
console.log(checkPermSort("abc", "abz"));         // false
console.log(checkPermSort("a", ""));              // false





