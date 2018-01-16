'use strict';
function circleArea(r) {
let area = Math.PI * r * r;
console.log(area);
//let roundedArea = Math.round(area * 100) /100;
//console.log(roundedArea);
    console.log(area.toFixed(2))
}
console.log(circleArea(5));