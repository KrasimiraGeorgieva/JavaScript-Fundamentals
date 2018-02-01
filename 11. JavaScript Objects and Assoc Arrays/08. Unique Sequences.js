function solve(arrs) {
    let uniqueArrays = [];
    for (let arr of arrs) {
        let numArr = JSON.parse(arr).map(Number).sort((a, b) => b-a);
        let sum = numArr.reduce((a, b) => a + b);
        if(!uniqueArrays.find(arr => arr.reduce((a, b) => a + b) === sum)){
            uniqueArrays.push(numArr);
        }
    }
    uniqueArrays.sort((a, b) => a.length > b.length).forEach(arr => console.log(`[${arr.join(', ')}]`));
}
solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);