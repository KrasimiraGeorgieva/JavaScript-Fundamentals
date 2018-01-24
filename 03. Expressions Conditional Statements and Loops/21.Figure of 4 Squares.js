"use strict";

function squareFigure(number) {
    let length = number % 2 !== 0 ? number : number - 1;
    let count = (2 * number - 4) / 2;
    let middle = Math.ceil(length / 2);

    for (let i = 1; i <= length; i++){
        if (i === 1 || i === middle || i === length){
            console.log(`+${'-'.repeat(count)}+${'-'.repeat(count)}+`);
        }else{
            console.log(`|${' '.repeat(count)}|${' '.repeat(count)}|`);
        }
    }
}

squareFigure(7);