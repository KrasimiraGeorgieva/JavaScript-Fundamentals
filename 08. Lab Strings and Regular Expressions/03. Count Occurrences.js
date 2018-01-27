function solve(target,str) {
    let count = 0;
    while(true){
        let startIndex = str.indexOf(target);
        if(startIndex < 0){
            break;
        }
        count++;
        str = str.substr(startIndex + 1);
    }
    console.log(count);
}
solve('the', 'The quick brown fox jumps over the lay dog.');