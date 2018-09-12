var	cb = function() {
    dateOfBirth = new Date(1997, 05, 21, 10, 15);
    currentTime = new Date();
    dateDiff = currentTime.valueOf() - dateOfBirth.valueOf();
    console.log(dateOfBirth + "\n" + currentTime);
    console.log(dateDiff);

    
}