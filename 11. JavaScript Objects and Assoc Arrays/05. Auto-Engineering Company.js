function solve(strArr) {
let cars = new Map();

    for (let row of strArr) {
       let [carBrand, carModel, producedCars] = row.split(' | ');
       producedCars = Number(producedCars);
       // Verify carBrand exists
        if(!cars.has(carBrand)){
            cars.set(carBrand, new Map());
        }
        // Verify carModel exists
        if(!cars.get(carBrand).has(carModel)){
            cars.get(carBrand).set(carModel,0)
        }
        let numProducedCars = cars.get(carBrand).get(carModel);
        cars.get(carBrand).set(carModel, numProducedCars + producedCars);
    }

    // Output

    for (let [carBrand, carModels] of cars) {
        console.log(`${carBrand}`);
        for (let [carModel, producedCars] of carModels) {
            console.log(`###${carModel} -> ${producedCars}`);

        }
    }
}
solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);