function solve(matrix) {
    let matrixOfNums = matrix.map(r => r.split(" ").map(Number));
    let normalDiagonal = 0;
    let backDiagonal = 0;
	
    for (let row = 0; row < matrixOfNums.length; row++) {
        normalDiagonal += matrixOfNums[row][row];
        backDiagonal += matrixOfNums[row][matrix.length - 1 - row];
    }
   
    if(normalDiagonal === backDiagonal){
        for (let row = 0; row < matrixOfNums.length; row++) {
            for (let col = 0; col < matrixOfNums.length; col++) {
                if(row === col || row + col + 1 === matrixOfNums.length){
                    continue;
                }
                matrixOfNums[row][col] = normalDiagonal;
            }
        }
    }
    console.log(matrixOfNums.map(r => r.join(' ')).join('\n'));
}
/*solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
    ]);*/
solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
    ]);