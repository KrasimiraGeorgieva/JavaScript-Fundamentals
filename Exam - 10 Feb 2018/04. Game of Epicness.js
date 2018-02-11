function solve(inputKingdoms, inputFights) {
    let kingdoms = {};

    for (let prop of inputKingdoms) {
        if (!kingdoms[prop.kingdom]) {
            kingdoms[prop.kingdom] = {generals: {}, totalWins: 0, totalLoses: 0};
        }

        let kingdom = kingdoms[prop.kingdom].generals;
        if (!kingdom[prop.general]) {
            kingdom[prop.general] = {army: 0, wins: 0, loses: 0};
        }

        kingdom[prop.general].army = kingdom[prop.general].army + prop.army;
    }

    for (let battles of inputFights) {
        let kingdom = battles[0];
        let general = battles[1];
        let kingdomRight = battles[2];
        let generalRight = battles[3];


        (kingdom, general, kingdomRight, generalRight);
    }

    // Output
    let kingdomWinner = Object.keys(kingdoms).sort(sortKingdom)[0];
    console.log(`Winner: ${kingdomWinner}`);

    let generals = kingdoms[kingdomWinner].generals;
    let generalStrArr = Object.keys(generals).sort(sortGeneral);
    for (let generalName of generalStrArr) {
        printOutput(generalName);
    }

    // Battle
    function battle(kingdomLeft, generalLeft, kingdomRight, generalRight) {
        if (kingdomLeft === kingdomRight) {
            return;
        }

        let armyLeft = kingdoms[kingdomLeft].generals[generalLeft];
        let armyRight = kingdoms[kingdomRight].generals[generalRight];

        if (armyLeft.army === armyRight.army) {
            return;
        }

        if (armyLeft.army > armyRight.army) {
            armyLeft.wins++;
            armyRight.loses++;

            armyLeft.army += armyLeft.army * 0.1;
            armyLeft.army = Math.floor(armyLeft.army);
            armyRight.army -= armyRight.army * 0.1;
            armyRight.army = Math.floor(armyRight.army);

            kingdoms[kingdomLeft].totalWins++;
            kingdoms[kingdomRight].totalLoses++;
        } else {
            armyRight.wins++;
            armyLeft.loses++;

            armyRight.army += armyRight.army * 0.1;
            armyRight.army = Math.floor(armyRight.army);
            armyLeft.army -= armyLeft.army * 0.1;
            armyLeft.army = Math.floor(armyLeft.army);

            kingdoms[kingdomRight].totalWins++;
            kingdoms[kingdomLeft].totalLoses++;
        }
    }

    function sortKingdom(a, b) {
        if (kingdoms[b].totalWins > kingdoms[a].totalWins) {
            return 1;
        }
        if (kingdoms[b].totalWins < kingdoms[a].totalWins) {
            return -1;
        }
        if (kingdoms[b].totalLoses > kingdoms[a].totalLoses) {
            return -1;
        }
        if (kingdoms[b].totalLoses < kingdoms[a].totalLoses) {
            return 1;
        }
        if (b > a) return -1;
        if (b < a) return 1;
        return 0;
    }

    function sortGeneral(a, b) {
        if (generals[b].army > generals[a].army) {
            return 1;
        }
        if (generals[b].army < generals[a].army) {
            return -1;
        }

        if (b > a) return 1;
        if (b < a) return -1;
        return 0;
    }

    function printOutput(generalName) {
        let general = generals[generalName];
        console.log("/\\" + "general: " + generalName);
        console.log("---army: " + general.army);
        console.log("---wins: " + general.wins);
        console.log("---losses: " + general.loses);
    }
}

solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000}],
    [["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"]]
);