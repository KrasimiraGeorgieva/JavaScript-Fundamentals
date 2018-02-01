function solve(strArrs) {
    let flavorsObj = {};
    let bottlesObj = {};
    for (let strArr of strArrs) {
        let[juiceName, quantity] = strArr.split(/\s*=>\s*/g);
        quantity = Number(quantity);

        if(!flavorsObj.hasOwnProperty(juiceName)){
            flavorsObj[juiceName] = quantity;
        }else {
            flavorsObj[juiceName] += quantity;
        }

        quantity = flavorsObj[juiceName];
        if(quantity >= 1000){
            let bottlesCount = Math.floor(quantity / 1000);
                bottlesObj[juiceName] = bottlesCount;
        }
    }
    for (let juiceName in bottlesObj) {
        console.log(`${juiceName} => ${bottlesObj[juiceName]}`)
    }
}
solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);