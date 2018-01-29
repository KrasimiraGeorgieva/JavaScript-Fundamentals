function solve(arr) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9\- ]+)$/g;

    for (let row of arr) {
        let matches = regex.exec(row);
        if (matches !== null) {
            console.log(`Name: ${matches[1]}`);
            console.log(`Position: ${matches[3]}`);
            console.log(`Salary: ${matches[2]}`);
            matches = regex.exec(row);
        }
    }
}

solve([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);
solve([
    'Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
]);