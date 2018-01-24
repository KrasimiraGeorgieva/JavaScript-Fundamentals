//"use strict";

function isLeapYear(year) {
    let leap = ((year % 4 == 0 && year % 100 != 0) ||
        (year % 400 == 0));

    /*if (leap) {
        return 'yes';
    } else {
        return 'no';
    }*/

    return(leap ? 'yes' : 'no');
}

console.log(isLeapYear(2016));