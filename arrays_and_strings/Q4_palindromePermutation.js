// Problem: Palindrome Permutation
// Soruce: Crack code Book
// Date: 2025-08-24
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Given a string, write a function to check if its a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.
A permutattion is a rearrengement of letters. The palindrome does not need to be limited to just dictionary words. 
You can ignore casing and non-letter characters. 
EXAMPLE input: Tact Coa output: true (permutations: "taco cat", "atco cta", etc.)
*/

function isPalindrome(str) {
    //clean str
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');

    //create a hash table (object or dictionary)
    //to store count of each character in the clean string
    const characterCount = {};

    for (let character of cleanStr) {
        if (!characterCount[character]) {
            characterCount[character] = 1;
        } else {
            characterCount[character]++;
        }
    }

    //cout how many characters have odd frequencies
    let oddCount = 0;

    for (let character in characterCount) {
        if (characterCount[character] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}


console.log(isPalindrome("abc")); 
console.log(isPalindrome("level"));
console.log(isPalindrome("Tact Coa"));     
console.log(isPalindrome("racecar"));  