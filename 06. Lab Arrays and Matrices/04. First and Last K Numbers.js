function solve(arr) {
    let n = Number(arr.shift());
    console.log(arr.slice(0, n).join(' '));
    console.log(arr.slice(arr.length - n).join(' '));
}
solve([2,
    7, 8, 9]
);

solve([3,
    6, 7, 8, 9]
);