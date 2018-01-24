function solve(args) {
    let targetSize = args[0];

    let cut = (num) => num / 4;
    let lap = (num) => num * 0.8;
    let grind = (num) => num - 20;
    let etch = (num) => num - 2;
    let transportAndWash = (num) => {
        console.log(`Transporting and washing`);
        return Math.floor(num);
    };
    let xRay = (num) => {
        console.log(`X-ray x1`);
        return ++num;
    };

    for (let i = 1; i < args.length; i++) {
        let microns = args[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperations(targetSize, microns, 'Cut', cut);
        microns = executeOperations(targetSize, microns, 'Lap', lap);
        microns = executeOperations(targetSize, microns, 'Grind', grind);
        microns = executeOperations(targetSize, microns, 'Etch', etch);

        if (microns + 1 === targetSize) {
            microns = xRay(microns);
        }
        console.log(`Finished crystal ${microns} microns`);

    }

    function executeOperations(targetSize, size, operationName, operation) {
        let counter = 0;
        //size = operation(size);
        while (operation(size) >= targetSize || Math.floor(size - targetSize) === 1) {
            size = operation(size);
            counter++;
        }
        if (counter > 0) {
            console.log(`${operationName} x${counter}`);
            size = transportAndWash(size);
        }
        return size;
    }
}
solve([1375, 50000]);
//solve([1000, 4000, 8100]);