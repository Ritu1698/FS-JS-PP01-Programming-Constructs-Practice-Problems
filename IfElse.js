//Minimum and Maximum
{
    let minValue  = Number.MAX_SAFE_INTEGER;
    let maxValue = Number.MIN_SAFE_INTEGER;
    for (let indexValue = 0; indexValue < 5; indexValue++) {
        let number = Math.floor(Math.random() * 900) + 100;
        console.log("Number Value : " + number);
        if (number < minValue) {
            minValue = number;
        }
        if (number > maxValue) {
            maxValue = number;
        }
    }
    console.log("Max Value is: " + maxValue + " Min Value is: " + minValue);
}

//Day check between March 20 - June 20
{
    const prompt = require('prompt-sync')();
    let day = prompt('Enter day ');
    let month = prompt('Enter month ');
    let result = false;
    if (month == 'March' && day >= 20) {
        result = true;
    }
    if (month == 'April' || month == 'May') {
        result = true;
    }
    if (month == 'June' && day <= 20) {
        result = true;
    }
    console.log(result);
}

//Check Leap Year Or Not
{
    const prompt = require('prompt-sync')();
    let year = prompt('Enter a year ');
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

//Check Heads Or Tails In Coin flip
{
    const HEADS = 0;
    let coin = Math.floor(Math.random() * 10) % 2;
    if (coin == HEADS) {
        console.log("HEADS");
    }
    else {
        console.log("TAILS");
    }
}
