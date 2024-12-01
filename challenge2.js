function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointRange = 5;
    const maxPointsBeforeSuspension = 12;

    // Check if speed is above limit
    if (speed <= speedLimit) {
        console.log('Ok');
    } 
    else {
        // Calculate the number of demerit points
        const points = Math.floor((speed - speedLimit) / demeritPointRange);

        if (points > maxPointsBeforeSuspension) {
            console.log('License suspended');
        } 
        else {
            console.log('Points: ' + points);
        }
    }
}

// Example usage
checkSpeed(60);
checkSpeed(80); 
checkSpeed(130); 
checkSpeed(150);  
