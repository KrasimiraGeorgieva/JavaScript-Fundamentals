function solve(arr) {
let result = new Map();
    for (let str of arr) {
        let [town, item, value ] = str.split(/\s*->\s*/);
        let multiplay = value.split(/\s*:\s*/).map(s=> Number(s)).reduce((a,b) => a*b);
        if(result.has(town)){
            if(result.get(town).has(item)){
                result.get(town).set(item,result.get(item) + multiplay);
            }else{
                result.get(town).set(item,multiplay);
            }
        }else{
            let itemsMap = new Map();
            itemsMap.set(item, multiplay);
            result.set(town, itemsMap);
        }
    }
    for (let [key] of result) {
        console.log('Town - ' + key);
        for (let [item,sum] of result.get(key)) {
            console.log('$$$' + item + ' : ' + sum);
        }
    }
}
solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);