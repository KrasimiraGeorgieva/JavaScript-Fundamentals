function solve(rows, cols) {
    let targetNum = rows * cols;
    let number = 1;
    let matrix = fillMatrixWithZeros(rows, cols);

    let currentRow = 0;
    let currentCol = 0;
    let rotations = 0;
	
    while (targetNum >= number) {
        //top row
        for (let i = rotations; i < cols - rotations; i++) {
            matrix[currentRow][currentCol++] = number++;
        }
        //right col downwards
        currentCol -= 1;
        for (let i = ++currentRow; i <= rows - 1 - rotations; i++) {
            matrix[currentRow++][currentCol] = number++;
        }
        //bottom row leftwards
        currentRow -= 1;
        for (let i = --currentCol; i >= rotations; i--) {
            matrix[currentRow][currentCol--] = number++;
        }
        //left column upwards
        currentCol += 1;
        for (let i = --currentRow; i > rotations; i--) {
            matrix[currentRow--][currentCol] = number++;
        }
        rotations++;
        currentRow++;
        currentCol++;
    }
    printMatrix(matrix);

    function printMatrix(matrix) {
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
    function fillMatrixWithZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
           matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }
}

solve(5, 5);