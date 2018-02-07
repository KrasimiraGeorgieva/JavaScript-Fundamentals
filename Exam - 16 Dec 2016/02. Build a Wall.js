function solve(arr) {
    arr = arr.map(Number);
    let concrete = [];

    while (true) {
        let buildOn = false;
        let dailyConcrete = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 30) {
                dailyConcrete += 195;
                arr[i]++;
                buildOn = true;
            }
        }

        if (!buildOn) {
            break;
        } else {
            concrete.push(dailyConcrete);
        }
    }
    let outputSum = concrete.reduce((a,b) => a + b);
    console.log(concrete.join(', '));
    console.log((outputSum * 1900) + ' pesos');
}

solve(['21', '25', '28']);