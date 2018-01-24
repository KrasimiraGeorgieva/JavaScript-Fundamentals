function solve(args) {
    let [x, y, x1, x2, y1, y2] = args;

    if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}

solve([12.5, -1, 2, 12, -3, 3]);
solve([8, -1, 2, 12, -3, 3]);