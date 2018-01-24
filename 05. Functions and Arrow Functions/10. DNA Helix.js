function solve(num) {
    let sequence = 'ATCGTTAGGG';
    let seqLength = sequence.length;
    let count = 0;

    for (let row = 1; row <= num; row++) {
        if(row % 4 === 1){
            console.log(`**${sequence[count++ % seqLength]}${sequence[count++ % seqLength]}**`);
        } else if (row % 4 === 0 || row % 4 === 2){
            console.log(`*${sequence[count++ % seqLength]}--${sequence[count++ % seqLength]}*`);
        } else if (row % 4 === 3){
            console.log(`${sequence[count++ % seqLength]}----${sequence[count++ % seqLength]}`);
        }
    }
}
solve(10);