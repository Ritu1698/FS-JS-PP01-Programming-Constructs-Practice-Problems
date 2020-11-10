//Powers Of 2
{
    const prompt = require('prompt-sync')();
    let powerOfTwo = prompt('Enter number to be the maximum power ');
    for (let indexValue = 0; indexValue <= powerOfTwo; indexValue++) {
        console.log(2 ** indexValue);
    }
}

//Nth harmonic number
{
    const prompt = require('prompt-sync')();
    let nthValue = parseInt(prompt("Enter the number "));
    let harmonicNumber = 0.0;
    for (let indexValue = 1; indexValue <= nthValue; indexValue++) {
        harmonicNumber += 1 / indexValue;
    }
    console.log("Harmonic number " + harmonicNumber);
}