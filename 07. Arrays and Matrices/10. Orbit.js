function solve(arr){
    let [rows, cols, targetRow, targetCol] = arr;

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          matrix[row][col] = Math.max(Math.abs(row - targetRow),
								Math.abs(col - targetCol))+1;
        }
    }
    console.log(matrix.map(r => r.join(' ')).join('\n'));
}
solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);