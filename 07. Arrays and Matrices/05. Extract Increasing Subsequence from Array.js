function solve(arr){
    arr = arr.map(Number);
    let maxNumber = Number.NEGATIVE_INFINITY;
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= maxNumber){
            output.push(arr[i]);
            maxNumber = arr[i];
        }
    }

console.log(output.join('\n'));
}
solve([1,3,8,4,10,12,3,2,24]);