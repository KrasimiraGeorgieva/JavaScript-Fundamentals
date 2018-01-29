function solve(str) {
let regex = /\b(?:_)([A-Za-z\d]+)\b/g;
let match = regex.exec(str);
let outputArr = [];

    while (match) {
        outputArr.push(match[1]);
        match = regex.exec(str);
    }
    console.log(outputArr.join(','));
}
solve('Calculate the _area of the _perfectRectangle object.');
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');