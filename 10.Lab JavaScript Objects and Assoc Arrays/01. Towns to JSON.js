function solve(arr) {
    let result = [];
    let key = arr[0].split(/\s*\|\s*/).filter(s => s !== '');
    for (let str of arr.slice(1)) {
        let obj = {};
        let[town, lat, long] = str.split(/\s*\|\s*/)
            .filter(st => st !== '');
        obj[key[0]] = town;
        obj[key[1]] = Number(lat);
        obj[key[2]] = Number(long);
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
solve(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]);