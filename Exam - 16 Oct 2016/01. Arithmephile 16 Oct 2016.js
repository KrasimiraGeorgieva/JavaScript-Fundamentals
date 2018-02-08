function solve(inputNumber) {
    inputNumber = inputNumber.map(Number);
    let max = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        let currentNumber = inputNumber[i];
        if (currentNumber >= 0  && currentNumber < 10) {
            let product = 1;
            for (let j = i + 1; j <= currentNumber + i; j++) {
                let currentMultiplier = inputNumber[j];
                product *= currentMultiplier;
            }
            if (!max) {
                max = product;
            }
            else if (product > max) {
                max = product;
            }
        }
    }
    console.log(max);
}

solve([
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
]);