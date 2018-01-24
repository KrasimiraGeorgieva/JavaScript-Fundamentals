"use strict";

function cone(r, h) {
    let l = Math.sqrt((r * r) + (h * h));
    console.log('volume = ' + Math.PI * r *r *h/3);
    console.log('area = ' + Math.PI *r*(r+l));
}

console.log(cone(3, 5));