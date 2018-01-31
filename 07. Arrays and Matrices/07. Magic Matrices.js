function solve(arr) {
    let matrix = arr;

    let rowSum = matrix[0].reduce((a, b) => a + b);
    let diffSum = true;

    // Sum rows value
    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = matrix[row].reduce((a, b) => a + b);
        if (rowSum !== currentRowSum) {
            diffSum = false;
        }
    }
	
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== rowSum) {
            diffSum = false;
        }
    }
    console.log(diffSum);
}

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]); // true
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]); // false


solve([
    [1, 0, 0],
    [0, 0, 1]
]); // false
