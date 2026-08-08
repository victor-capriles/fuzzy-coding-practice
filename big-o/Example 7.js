// Problem: Example 7
// Soruce: Crack code Book
// Date: 2025-08-06
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

/*
Which of the following are equivalent to O(n), why?

1. O(N + P), where P < N/2
A. Yes, its equivalent to O(n), as in BigO we care only about the dorminant term. So we would drop
P and have O(n).

2. O(2n)
A. yes, its equivalent to O(n), as BigO ignores constant multipliers. Doubling the number of operations
doesn't change the rate of growth, just the actual time taken.

3. O(N + log N)
A. yes it equivalent to O(n), as in BigO we only care about the dominant term. Hence we drop log n, 
which growth is slower. Note* it refers to the same input n and n.

4. O(N + M)
A. no it's not equivalent to O(n). Because there's no relationship between N and M so we have to
keep both variables.

*/
