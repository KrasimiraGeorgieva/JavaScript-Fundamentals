function solve(arr) {
    let commandArr = [];
    let number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            number++;
            commandArr.push(number);
        } else if (arr[i] === 'remove') {
            number++;
            commandArr.pop();
        }
    }
    if(commandArr.length === 0){
        console.log('Empty');
    }
    for(let el of commandArr){
        console.log(el);
    }

}
//solve(['add','add','remove','add','add']);
solve(['remove', 'remove', 'remove']);