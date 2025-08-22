// Problem: Check Permutation
// Soruce: Crack code Book
// Date: 2025-08-22
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Check Permutation. Given two strings, write a method to decide if one is a permutation of the other.
*/


// solution implementing bubble sort
function checkPermutation(str1, str2) {
    //is string empty?
    if (str1.length === 0) {
        console.log("string a is empty");
        return false;
    }

    if (str2.length === 0) {
        console.log("string b is empty");
        return false;
    }

    //is lenght of strings not equal?
    if (str1.length !== str2.length) {
        console.log("string mismatch");
        return false;
    }
    
    if (str1.length === 0 && str2.length === 0) {
        console.log("both strings are empty!");
        return true;
    }

    const sorted1 = bubbleSort(str1);
    const sorted2 = bubbleSort(str2);

    return sorted1 === sorted2;
}

//function to sort
function bubbleSort(str) {
    const arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr.join("");
}

//test cases
console.log(checkPermutation("abc", "bca"));
