// Problem: Zero Matrix
// Soruce: Crack code Book
// Date: 2025-08-28
// Approach: Brief idea of how you tackled the problem 
// Status: Solved, In progress, Review needed 


/*
Zero Matrix. Write an algorithm such that if an element in an M * N matrix is 0,
its entire row and column are set to 0.
*/

let matrix = [
    [1, 2, 0],
    [4, 5, 6]
];

function setZero(matrix) {
    //create two arrays to remember which rows or columns need to be zeroed
    let row = new Array(matrix.length).fill(false);
    let column = new Array(matrix[0].length).fill(false);

    //first pass - find where are the zeroes
    //we go through each cell of the matrix if a cell contains a 0, mark that row and column
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    //zero out the marked rows
    //if a row is marked true, call helper function
    for (let i = 0; i < row.length; i++) {
        if (row[i]) nullifyRow(matrix, i);
    }

    //zero out marked columns
    //if column is marked true, call helper function
    for (let j = 0; j < column.length; j++) {
        if (column[j]) nullifyColumn(matrix, j);
    }
    console.table(matrix)
}
setZero(matrix)

//helper functions
function nullifyRow(matrix, row) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
}

function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}