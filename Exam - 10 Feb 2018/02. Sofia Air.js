function solve(mapOfSofiaArr, strForcesArr) {
    let pollutionMap = [];
    for (let maps of mapOfSofiaArr) {
        pollutionMap.push(maps.split(' ').map(Number));
    }

    for (let strForces of strForcesArr) {
        let forcesArr = strForces.split(' ');

        let forces = forcesArr[0];
        let args = Number(forcesArr[1]);

        switch (forces) {
            case 'breeze':
                breeze(args);
                break;
            case 'gale':
                gale(args);
                break;
            case 'smog':
                smog(args);
                break;
        }
    }

    let pollutedAreas = pollutedArea();
    if (pollutedAreas.length > 0) {
        let output = pollutedAreas.sort().join(', ');
        console.log(`Polluted areas: ${output}`);
    } else {
        console.log('No polluted areas');
    }

    function pollutedArea() {
        let output = [];
        for (let row = 0; row < pollutionMap.length; ++row) {
            for (let col = 0; col < pollutionMap[row].length; ++col) {
                if (pollutionMap[row][col] >= 50) {
                    output.push(`[${row}-${col}]`);
                }
            }
        }

        return output;
    }

    function breeze(index) {
        for (let i = 0; i < pollutionMap[index].length; ++i) {
            pollutionMap[index][i] -= 15;
            if (pollutionMap[index][i] < 0) {
                pollutionMap[index][i] = 0;
            }
        }
    }

    function gale(index) {
        for (let i = 0; i < pollutionMap[0].length; ++i) {
            pollutionMap[i][index] -= 20;
            if (pollutionMap[i][index] < 0) {
                pollutionMap[i][index] = 0;
            }
        }
    }

    function smog(value) {
        for (let i = 0; i < pollutionMap.length; ++i) {
            for (let j = 0; j < pollutionMap[i].length; ++j) {
                pollutionMap[i][j] += value;
            }
        }
    }
}

/*
solve([
        '5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'
    ],
    ['smog 11', 'gale 3','breeze 1', 'smog 2']);*/

solve([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);