function solve(args) {
    let foot = Math.floor( Number(args) / 12);
    let inches = Number(args) % 12;
    console.log((`${foot}'-${inches}"`));
}

solve(55);