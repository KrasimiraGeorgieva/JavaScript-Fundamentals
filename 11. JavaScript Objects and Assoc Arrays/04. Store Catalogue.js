function solve(arrayOfStrings) {
let catalogue = new Map;
let upperCaseLetters = new Set;
    for (let string of arrayOfStrings) {
        let[product,price] = string.split(' : ');
        catalogue.set(product,price);
        let firstLetter = product[0].toUpperCase();
        upperCaseLetters.add(firstLetter)
    }

    let sortedLetters = Array.from(upperCaseLetters.values()).sort();
    for (let letter of sortedLetters) {
        console.log(letter);
        for (let key of [...catalogue.keys()].sort()) {
            if(key[0].toUpperCase() === letter){
                console.log(` ${key}: ${catalogue.get(key)}`)
            }
        }
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);