function solve(arr) {
let towns = new Map();
    for (let str of arr) {
        let[name,value] = str.split(/\s*<->\s*/).filter(a => a !== '');
        if(towns.has(name)){
            towns.set(name,towns.get(name) + Number(value))
        } else{
            towns.set(name, Number(value))
        }
    }
    // Variant 1 printing
    for (let [key,value] of towns) {
        console.log(key + ' : ' + value);
    }
    // Variant 2 printing
    // [...towns].forEach(([towns, value]) => console.log(`${towns} : ${value}`));
}
solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000']);