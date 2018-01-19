"use strict";

function lastMonth(dateArr) {
    let [day, month, year] = dateArr;
    let date = new Date(year, month-1, 0);

    return date.getDate();
}

console.log(lastMonth([13, 12, 2004]));