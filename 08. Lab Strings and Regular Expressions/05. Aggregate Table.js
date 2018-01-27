function solve(arr) {
    let town = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('|').filter(a => a !== '')
        town.push(token[0].trim());
        sum += Number(token[1].trim());
    }
    console.log(town.join(', '));
    console.log(sum);

}
solve(['| Sofia | 300',
    '| Veliko Tarnovo | 500',
    '| Yambol | 275']
);