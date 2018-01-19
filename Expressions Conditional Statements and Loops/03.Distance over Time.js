"use strict";

function distanceOverTime([speed1, speed2, time]) {
    time /= 60;
    let firstDistance = speed1 * time;
    let secondDistance = speed2 * time;
    let deferenceInDistance = Math.abs(firstDistance - secondDistance);

    console.log(deferenceInDistance);

    /*let distance1 = (speed1 / 3.6) * time;
    let distance2 = (speed2 / 3.6) * time;

    console.log(Math.abs(distance1 - distance2));*/
}

distanceOverTime([0, 60, 3600]);