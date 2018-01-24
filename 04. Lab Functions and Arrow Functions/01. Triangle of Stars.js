function printTriangle(number) {
    for (let i = 1; i <= number; i++) {
        console.log(print(i));
    }

    for (let i = number - 1; i > 0; i--) {
        console.log(print(i));
    }

    function print (n) {
        return '*'.repeat(n).trim();
    }
}

printTriangle(2);