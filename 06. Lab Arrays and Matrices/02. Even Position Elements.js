function solve(arr) {
    console.log(arr.filter((el, i) => {
        return i % 2 === 0
    }).join(' '))
}

solve(['20', '30', '40']);