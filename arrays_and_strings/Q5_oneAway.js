// Problem: One Away
// Soruce: Crack code Book
// Date: 2025-08-25
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

function isOneAway(str1, str2) {
    //check if empty string
    if (str1.length == 0 && str2.length == 0) {
        return true;
    }

    if (str1.length === str2.length) {
        return oneEditReplace(str1, str2);
    } else if (str1.length == str2.length + 1) {
        return oneEditRemove(str1, str2);
    } else if (str2.length == str1.length + 1) {
        return oneEditInsert(str1, str2);
    } else {
        //length diff is more than 1 need more than one edit

    }
    return false;
}


function oneEditReplace(s1, s2) {
    let foundDifference = false;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (foundDifference) return false;
            foundDifference = true;
        }
    }

    return true;
}

function oneEditInsert(shorter, longer) {
    let index1 = 0;
    let index2 = 0;

    while (index1 < shorter.length && index2 < longer.length) {
        if (shorter[index1] !== longer[index2]) {
            if (index1 !== index2) return false;
            index2++;
        } else {
            index1++;
            index2++;
        }
    }

    return true;
}

function oneEditRemove(longer, shorter) {
    //delegeta to helper function with flipped arguments
    return oneEditInsert(shorter, longer);
}

console.log(isOneAway("pale", "ple"));   // true
console.log(isOneAway("pales", "pale")); // true
console.log(isOneAway("pale", "bale"));  // true
console.log(isOneAway("pale", "bake"));  // false
console.log(isOneAway("a", ""));         // true
console.log(isOneAway("pale", "pale"));  // true
console.log(isOneAway("", ""));          // true
