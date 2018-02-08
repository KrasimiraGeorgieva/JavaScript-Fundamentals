function solve(meals, commands) {
    let mealsEaten = 0;
    let actions = {
        Serve: () => {
            if (meals.length > 0) {
                console.log(`${meals.pop()} served!`);
            }
        },
        Add: ([meal]) => {
            if (meal && meal !== '') {
                meals.unshift(meal);
            }
        },
        Shift: ([startIdx, endIdx]) => {
            if (startIdx < endIdx && startIdx >= 0 && endIdx < meals.length && endIdx > 0) {
                let temp = meals[startIdx];
                meals[startIdx] = meals[endIdx];
                meals[endIdx] = temp;
            }
        },
        Eat: () => {
            if (meals.length > 0) {
                console.log(`${meals.shift()} eaten`);
                mealsEaten++;
            }
        },
        Consume:
            ([startIdx, endIdx]) => {
                let hasValidIndexes = startIdx < endIdx
                    && startIdx >= 0
                    && endIdx < meals.length
                    && endIdx > 0;
                if (hasValidIndexes) {
                    let mealsToEat = endIdx - startIdx + 1;
                    meals.splice(startIdx, mealsToEat);
                    mealsEaten += mealsToEat;
                    console.log('Burp!');
                }
            },
        End:
            () => {
                if (meals.length > 0) {
                    console.log(`Meals left: ${meals.join(', ')}`);
                } else {
                    console.log("The food is gone");
                }
                console.log(`Meals eaten: ${mealsEaten}`);
            }
    };
    for (let command of commands) {
        let commandParams = command.split(' ');
        let action = commandParams.shift();

        if (actions[action]) {
            actions[action](commandParams);
            if (action === 'End') {
                break;
            }
        }
    }
}

/*solve(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    ['Add spaghetti',
        'Shift 0 1',
        'Consume 1 4',
        'End']);*/

/*solve(['chicken', 'steak', 'eggs'],
['Serve',
'Eat',
'End',
'Consume 0 1']);*/

solve(['bacon', 'veggies', 'chicken'],
    ['Add',
        'End']);