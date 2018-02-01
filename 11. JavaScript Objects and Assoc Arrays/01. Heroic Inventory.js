function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let heroArgs = arr[i].split(/\s*\/\s*/g);

        let heroName = heroArgs[0];
        let heroLevel = Number(heroArgs[1]);
        let heroItems = [];
        if (heroArgs.length > 2) {
            heroItems = heroArgs[2].split(', ');
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        output.push(hero);
    }
    console.log(JSON.stringify(output));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);