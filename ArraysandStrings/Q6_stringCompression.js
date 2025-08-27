// Problem: String Compression
// Soruce: Crack code Book
// Date: 2025-08-25
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed

/*
String Compression. Implement a method to perform a basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" strings would not become smaller than the original string, 
your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

*/

function strCompression(str) {
    //edge case if empty string
    if (str.length === 0) return '';

    let compressed = '';
    let currentChar = '';
    let count = 0;

    for (character of str) { 
        if (character === currentChar) {
            count++;
        } else {
            //if we are switching from a previous character, record it
            if (currentChar !== '') {
                compressed += currentChar + count;
            }
            //update to new character
            currentChar = character;
            count = 1;
        }
    }

    //append the final character group
    compressed += currentChar + count;

    return compressed.length < str.length ? compressed : str;
}

console.log(strCompression("aaabbbbbaaaacccccccccdddda"))
console.log(strCompression(" "))
