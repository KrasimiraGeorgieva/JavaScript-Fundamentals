function calculate(c, d, symbol) {
    let add = function (a,b) {
        return a + b};
    let subtract = function (a,b) {
       return a - b;
    };
    let multiplay = function (a,b) {
        return a * b;
    };
    let divide = function (a,b) {
        return a / b;
    };

    switch (symbol){
        case '*':return multiplay(c,d);
        case '/':return divide(c,d);
        case '+':return add(c,d);
        case '-':return subtract(c,d);
    }
}

console.log(calculate(2, 4, '*'));