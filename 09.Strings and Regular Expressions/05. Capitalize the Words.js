function solve(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase()
            + arr[i].substring(1).toLowerCase();
    }
    console.log(arr.join(' '));
}
solve('Was that Easy? tRY thIs onE for SiZe!');