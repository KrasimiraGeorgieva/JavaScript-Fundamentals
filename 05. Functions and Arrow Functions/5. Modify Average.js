function solve(number) {
    let numStr = number.toString();

    // Solution 1
    //let getAverage = (numString) => numStr.split('').map(Number).reduce((a, b)=> a + b)/numStr.length;

    // Solution 2
    let getAverage = (numString) => {
        let sum = 0;
        for (let i = 0; i < numString.length; i++) {
            sum += Number(numString[i]);
        }
        return sum / numString.length;
    };
    //

    while(getAverage(numStr) <= 5){
        numStr += '9';
    }
    console.log(numStr);
}
solve(101);
solve(5835);