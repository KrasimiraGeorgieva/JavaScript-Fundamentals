function solve([x1, y1, x2, y2]) {
[x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
let distanceA = getDistanceType(calculateDistance(x1, y1));
let distanceB = getDistanceType(calculateDistance(x2, y2));
let distanceC = getDistanceType(calculateDistance(x1, y1, x2, y2));

console.log (`{${x1}, ${y1}} to {${0}, ${0}} is ${distanceA}`);
console.log (`{${x2}, ${y2}} to {${0}, ${0}} is ${distanceB}`);
console.log (`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceC}`);

    function calculateDistance(x1, y1, x2 = 0, y2 = 0) {
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;
        return Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    }

    function getDistanceType(distance) {
        return Math.round(distance) === distance ? "valid" : "invalid";

        /*if (distance % 1 === 0){
            return 'valid';
        }
        return 'invalid';*/
    }
}
solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);