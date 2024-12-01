function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointRange = 5;
    const maxDemerits = 12;

    //Check if speed doesn't exceed limit
    if (speed <= speedLimit) {
        console.log('Ok');
    } 
    else {
        //Calculate the number of demerit points
        const points = (speed - speedLimit) / demeritPointRange;

        if (points > maxDemerits) {
            console.log('License suspended');
        } 
        else {
            console.log('Points: ' + points);
        }
    }
}

//Sample speeds
checkSpeed(65);
checkSpeed(80); 
checkSpeed(130); 
checkSpeed(131);  
