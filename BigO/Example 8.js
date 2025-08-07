// Problem: Example 8
// Soruce: Crack code Book
// Date: 2025-08-06
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Q. Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array.
What would the runtime be?

A. so we have:
a = number of strings in the array
s = average length of each string

sorting each string would be O(s log s). Because first we split the string into character so we get O(s)
then we sort the characters so it would be O(log s) by the number of characters. Hence O(s log s).

Then because we have `a` strings, the runtime becomes O(a * s log s).

Now we have to sort the array of strings.

so sorting `a` strings would take O(a log a) but because we also have to compare,
making comparisons cost O(s). Making the runtime O(s * a log a)

Now we combine the runtimes
- O(a * s log s)
- O(s * a log a)
= O(a * s (log a * log s))

*/
