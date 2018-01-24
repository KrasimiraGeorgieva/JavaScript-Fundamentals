'use strict';

function primeNums(num) {
    let prime = (num > 1);
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        return 'true';
    } else {
        return 'false'
    }
}

console.log(primeNums(7));