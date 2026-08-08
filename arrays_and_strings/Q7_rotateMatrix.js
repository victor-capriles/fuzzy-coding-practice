// Problem: Rotate Matrix
// Soruce: Crack code Book
// Date: 2025-08-27
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotateMatrix(matrix) {
    const n = matrix.length;

    //go layer by layer, from outside to inside
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            const offset = i - first;

            //save top
            let top = matrix[first][i];

            //left -> top
            matrix[first][i] = matrix[last - offset][first];

            //bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            //right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            //top -> right
            matrix[i][last] = top;
        }
    }
    console.table(matrix)
}

rotateMatrix(matrix);