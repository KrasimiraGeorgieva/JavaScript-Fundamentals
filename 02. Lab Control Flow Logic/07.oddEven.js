"use strict";

function oddEven(num) {
    if(num % 2 === 0){
        console.log('even');
    }else if(Math.abs(num % 2) === 1){
        console.log('odd');
    }else{
        console.log('invalid');
    }
}

console.log(oddEven(3, 5));