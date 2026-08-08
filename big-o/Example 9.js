// Problem: Example 9
// Soruce: Crack code Book
// Date: 2025-08-08
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(5,
    new Node(3),
    new Node(8)
);

function sum(node) {
    if (node == null) {
        return 0;
    }
    return sum(node.left) + node.value + sum(node.right);
}
console.log(sum(root));

/*
Q. The following simple code sums the values of all the nodes in a balanced binary search tree.
What is its runtime?

A. The runtime is O(n), because we visit our "touch" every node exactly once during the recursive traversal.
The work per node is constant, so the total time grows linearly with the number of nodes n.
The space complexity is O(log n), since it's a balanced binary tree, and the maximum depth of the recursion
stack equals the height of the tree. In a balanced tree, height is proportional to log n.

*/