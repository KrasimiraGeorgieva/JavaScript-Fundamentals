function solve(matrix) {
    /*console.log(matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort(((a, b) => a < b)[0]))*/

    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
           if(matrix[row][col] > min){
               min = matrix[row][col]
           }
        }
    }
    console.log(min);
}
solve([
    [20, 50, 10],
    [8, 33, 145]
    ]);