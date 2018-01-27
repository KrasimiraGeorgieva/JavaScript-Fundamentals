function solve(str) {
let regex = /[,;().\s]+/;
str.split(regex).forEach(s => console.log(s));
}
solve('let sum = 4 * 4,b = "wow";');
