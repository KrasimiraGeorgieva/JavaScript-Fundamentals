function solve(arr) {
    console.log(
        arr.sort((a, b) => a-b).slice(0, Math.min(2, arr.length)).join(' '));
}
solve([30, 15, 50, 5]);
//solve([3, 0, 10, 4, 7, 3]);