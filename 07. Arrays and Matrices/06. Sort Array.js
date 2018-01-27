function solve(arr) {
    arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a,b) => a.length - b.length);
    console.log(arr.join('\n'));
}

solve('test', 'Deny', 'omen', 'Default');