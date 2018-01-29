function solve(arr) {
    let numsArr = [];
    let regex = /[0-9]+/g;
    let text = '';

    for (let str = 0; str < arr.length; str++) {
        let currentStr = arr[str];
        text += currentStr;
    }

    let matches = regex.exec(text);
        while (matches) {
            numsArr.push(matches[0]);
            matches = regex.exec(text);
        }
    console.log(numsArr.join(' '));
}
solve([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);

