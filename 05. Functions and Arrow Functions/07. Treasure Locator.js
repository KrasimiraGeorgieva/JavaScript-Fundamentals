function solve(arr) {
    arr = arr.map(Number);

    let treasures = [];
    for (let i = 0; i < arr.length; i+=2) {
        let x = arr[i];
        let y = arr[i + 1];

        let treasureLocation = checkLocation(x, y);
        treasures.push(treasureLocation);
    }
    
    function checkLocation(x, y) {
        switch (true){
            case x >= 1 && x <= 3 && y >= 1 && y <= 3:
                return 'Tuvalu';
            case x >= 8 && x <= 9 && y >= 0 && y <= 1:
                return 'Tokelau';
            case x >= 5 && x <= 7 && y >= 3 && y <= 6:
                return 'Samoa';
            case x >= 0 && x <= 2 && y >= 6 && y <= 8:
                return 'Tonga';
            case x >= 4 && x <= 9 && y >= 7 && y <= 8:
                return 'Cook';
            default:
                return 'On the bottom of the ocean';
        }
    }
    
    console.log(treasures.join('\n'));
}
solve([4, 2, 1.5, 6.5, 1, 3]);
solve([6, 4]);