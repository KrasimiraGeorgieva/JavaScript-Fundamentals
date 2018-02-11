function solve(arg) {
    let input = strArr.map(Number);
    let countBitcoins = 0;
    let parchasedBitcoins = 0;
    let money = 0;
    let day = 0;

    for (let i = 0; i < input.length; ++i) {
        let currentMoney = input[i] * 67.51;

        if ((i + 1) % 3 === 0) {
            currentMoney -= currentMoney * 0.3;
        }

        money += currentMoney;
        if (money >= 11949.16) {
            let todayBitcoins = Math.trunc(money / 11949.16);
            console.log(todayBitcoins);
            countBitcoins += todayBitcoins;
            money -= todayBitcoins * 11949.16;

            if (!parchasedBitcoins) {
                day = i + 1;
                parchasedBitcoins = 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${countBitcoins}`);
    if(parchasedBitcoins){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve();