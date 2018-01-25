function solve(arr) {
    console.log(
        arr.filter((el, index) => index % 2 !== 0)
        .map(el => el * 2)
        .reverse().join(' ')
    )
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);