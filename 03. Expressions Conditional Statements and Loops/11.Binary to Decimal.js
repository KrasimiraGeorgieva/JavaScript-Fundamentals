function binaryToDecimal(binaryNum) {
  /*  return binaryNum.split('').reverse().reduce(
        function (x,y,i) {
            return (y === '1') ? x + Math.pow(2,i):x;
        },0);*/
    return(parseInt(binaryNum, 2));
}

console.log(binaryToDecimal('00001001'));
