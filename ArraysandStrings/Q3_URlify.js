// Problem: URlify
// Soruce: Crack code Book
// Date: 2025-08-22
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


/*
Write a method to replace all spaces in a string with '%20'.
You may assume the string has enough extra space at the end to accommodate the additional characters, and you're given the true length of the string 
(i.e., the part we care about before extra spaces).

*/


function urlLify(str, trueLength) {
    //string has no content
    if (str.length === 0) {
        return '';
    }

    if(!hasSpace(str)) {
        return str;
    }

    let splitStr = str.split('');
    let result = [];

    for (let i = 0; i < trueLength; i++) {
        if (splitStr[i] === ' ') {
            result.push('%20');
        } else {
            result.push(splitStr[i]);
        }
    }

    return result.join('');
}

//function to check if there's an space in the string
function hasSpace(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            return true;
        }
    }
    return false;
}

//test case
console.log(urlLify("Mr Victor Capriles    ", 19));
