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