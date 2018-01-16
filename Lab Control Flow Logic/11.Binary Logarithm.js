'use strict';

function binaryLogarithm(number) {
    for (let nums of number) {
        console.log(Math.log2(nums))
    }
}

console.log(binaryLogarithm([10, 20, 8, 0, 12]));