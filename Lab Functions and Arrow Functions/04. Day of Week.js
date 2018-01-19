function  dayOfWeek(input) {
    /*switch (input) {
        case 'Monday': return 1;
        case 'Tuesday': return 2;
        case 'Wednesday': return 3;
        case 'Thursday': return 4;
        case 'Friday': return 5;
        case 'Saturday': return 6;
        case 'Sunday': return 7;
        default: return 'error';
    }*/

    let arr = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
    let index = arr.indexOf(input);
    return index > -1 ? index + 1 : 'error'
}
console.log(dayOfWeek('Frabjoyousday'));