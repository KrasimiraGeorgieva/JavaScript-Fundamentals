function solve(arr) {
    [aX, aY, bX, bY, cX, cY] = arr.map(Number);
    let distanceAB = calculateDistance(aX, aY, bX, bY);
    let distanceAC = calculateDistance(aX, aY, cX, cY);
    let distanceBC = calculateDistance(bX, bY, cX, cY);

    function calculateDistance(aX, aY, bX, bY) {
        let xDistance = bX - aX;
        let yDistance = bY - aY;
        return Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    }

    function buildShortestPath(distanceA, distanceB, distanceC) {
        let output = '';
        if (distanceA <= distanceB && distanceA <= distanceC){
            if(distanceB <= distanceC){
               output += '1->2->3: ' + (distanceA + distanceB);
            } else {
                output += '1->2->3: ' + (distanceA + distanceC);
            }
        } else if (distanceB <= distanceA && distanceB <= distanceC){
            if(distanceA <= distanceC){
                output += '2->1->3: ' + (distanceA + distanceB);
            } else {
                output += '1->3->2: ' + (distanceC+ distanceB);
            }
        } else {
            if(distanceA <= distanceB){
                output += '1->2->3: ' + (distanceA + distanceC);
            } else {
                output += '1->3->2: ' + (distanceC + distanceB);
            }
        }
        return output;
    }

    console.log(buildShortestPath(distanceAB, distanceAC, distanceBC));
}
solve([0, 0, 2, 0, 4, 0]);
solve([5, 1, 1, 1, 5, 4]);
solve([-1, -2, 3.5, 0, 0, 2]);