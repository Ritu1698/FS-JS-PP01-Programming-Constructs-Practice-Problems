//Display Power Of 2
{
    prompt = require('prompt-sync')();
    let power = parseInt(prompt("Enter power"));
    let n = 0;
    while (n <= power) {
        let number = 2 ** n;
        if (number <= 256) {
            console.log(number);
            n++;
        } else {
            break;
        }
    }
}

//Find Magic number
{
    const prompt = require('prompt-sync')();
    let number = 0;
    while (number < 1 || number > 100) {
        number = parseInt(prompt("Enter a Number Between 1 to 100 Range"));
    }

    let lowerRange = 1;
    let upperRange = 100;
    let middleValue = Math.floor((lowerRange + upperRange) / 2);

    while (middle != number) {
        if (number < middle) {
            upperRange = middle;
            middleValue = Math.floor((lowerRange + upperRange) / 2);
        } else {
            lowerRange = middleValue;
            middleValue = Math.floor((lowerRange + upperRange) / 2);
        }
    }
    console.log("Magic Number " + middle);
}
