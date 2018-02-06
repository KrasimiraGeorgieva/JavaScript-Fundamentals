function solve(size, increment) {
let totalRow =Math.ceil(size/2);
let [stone, marible,lapis] = [0,0,0];
    for (let i = 1; i <= totalRow-1; i++) {
        let currentStone = (size-2) * (size -2);
        if(i % 5 === 0) {
            lapis += size * size - currentStone;
        } else {
            marible += size * size - currentStone;
        }
        stone += currentStone;
        size -= 2;
    }
    let gold = size * size;
    console.log('Stone required: ' + Math.ceil(stone*increment));
    console.log('Marble required: ' + Math.ceil(marible*increment));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis*increment));
    console.log('Gold required: ' + Math.ceil(gold*increment));
    console.log('Final pyramid height: ' + Math.floor(totalRow*increment));
}

solve(12, 1);