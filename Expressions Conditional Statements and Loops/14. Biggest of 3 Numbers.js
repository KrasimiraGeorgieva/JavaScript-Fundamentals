function solve(args) {
    let num1 = Number(args[0]);
    let num2 = Number(args[1]);
    let num3 = Number(args[2]);

    // Variant 1
    //console.log(Math.max(num1, num2, num3));

    //Variant 2
    let maxNum = num1;

    if(num2 > maxNum){
        maxNum = num2;
    }
    if(num3 > maxNum){
        maxNum = num3;
    }
    console.log(maxNum);
}
solve([43, 43.2, 43.1]);