"use strict";

function gradsToDegrees(grads) {
    grads = grads % 400;
    if (grads < 0){
        grads += 400;
    }
    grads = grads;

    grads *= 360/400;
    return grads;
}

console.log(gradsToDegrees(850));