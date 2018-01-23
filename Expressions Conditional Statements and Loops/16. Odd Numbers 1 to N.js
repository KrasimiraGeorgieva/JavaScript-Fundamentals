function solve(inputNumber) {
    // Solution1
    for (let i = 1; i <= inputNumber; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }

    /* Solution 2
    for (let i = 1; i <= inputNumber; i+=2){
            console.log(i);
    }*/
}
solve(5);