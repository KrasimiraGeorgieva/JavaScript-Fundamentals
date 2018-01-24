"use strict";

function solve(number) {
    /*let row = '';
    for (let i = 0; i < number; i++) {
        row += '$';
        console.log((row));
    }*/

    let dollar = ('$'.repeat(1));
    for (let i = 0; i < number; i++) {
        console.log(dollar);
        dollar = dollar + '$';

    }
}

solve(3);