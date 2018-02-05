function solve(arr) {
    let set = new Set();

    for (let row of arr) {
        set.add(row);
    }
    set = [...set].sort(sortAlphabetically);

    for (let row of set) {
        console.log(row);
    }

    function sortAlphabetically(a, b) {
        let firstCriteria = a.length - b.length;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a.localeCompare(b);
        }
    }
}
solve([ 'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston' ]
);