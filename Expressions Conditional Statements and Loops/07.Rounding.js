"use strict";

function round(arr) {
    let [num, precision] = arr;
    if(precision > 15){
        precision = 15;
    }
    console.log(+num.toFixed(precision));

    // let denominator = Math.pow(10, precision);
    // console.log(Math.round(num * denominator) / denominator);
}

round([10.5, 3]);