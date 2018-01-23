function solve(a, b, c) {
    let discriminant = Math.pow(b, 2) - (4 * a * c);

    let result1 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
    if (discriminant > 0){
        let result2 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
        return result1 + "\n" + result2;
    } else if(discriminant < 0) {
        return "No";
    } else {
        return result1;
    }
}

console.log(solve(6, 11, -35));
console.log(solve(5, 2, 1));
console.log(solve(1, -12, 36));