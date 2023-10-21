// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return (blocks >= 42) ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet(feet) {
    const blocks = distanceFromHqInBlocks(feet);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distance = (destination - start) * 264;
    return distance >= 0 ? distance : -distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
