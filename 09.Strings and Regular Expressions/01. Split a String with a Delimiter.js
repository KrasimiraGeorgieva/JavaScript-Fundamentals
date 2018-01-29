function solve(text, delimiter) {
let splittedArr = text.split(delimiter);
// Solution 1
splittedArr.forEach(el => console.log(el));

// Solution 2
    /*for (let i = 0; i < splittedArr.length; i++) {
        console.log(splittedArr[i]);
    }*/
}
solve('One-Two-Three-Four-Five',
    '-');
solve('http://platform.softuni.bg','.');