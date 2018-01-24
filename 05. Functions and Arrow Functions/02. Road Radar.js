function solve([speed, area]) {

    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);
    let overSpeed = speed - limit;
    let message = '';

    if (infraction) {
        message = '';
        if (overSpeed <= 20) {
            message = 'speeding';
        } else if (overSpeed <= 40) {
            message = 'excessive speeding';
        } else {
            message = 'reckless driving';
        }
        console.log(message);
    }

    function getLimit(area) {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            return true;
        }
    }

/*    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);

    if (infraction) {
        console.log(infraction);
    }

    function getLimit(area) {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed <= 20) {
                return 'speeding';
            } else if (overSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }

    }*/
}

solve([120, 'interstate']);
solve([40, 'city']);
solve([21, 'residential']);