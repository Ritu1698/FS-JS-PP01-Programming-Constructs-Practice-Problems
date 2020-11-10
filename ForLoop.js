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

//Check Prime or Not
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number "));
    let isPrimeNumber = true;
    if (number == 1) {
        isPrimeNumber = false;
    }
    for (let indexValue = 2; indexValue <= number / 2; indexValue++) {
        if (number % indexValue == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    console.log(isPrimeNumber);
}

//Print Prime numbers in a Given Range
{
    const prompt = require('prompt-sync')();
    let startRange = parseInt(prompt("Start Of Range "));
    let endRange = parseInt(prompt("End Of Range "));
    for (let number = startRange; number <= endRange; number++) {
        let isPrimeNumber = true;
        if (number == 1 || number == 0) {
            continue;
        }
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            console.log(number + "Is Prime");
        }
    }
}

// Primt Factorial Of Number
{
    const prompt = require('prompt-sync')();
    let number = prompt("Enter number ");
    let factorial = 1;
    for (indexValue = 2; indexValue <= number; indexValue++) {
        factorial = factorial * indexValue;
    }
    console.log("Factorial is: " + factorial);
}

//Prime factorization Of Number
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number: "));
    while (number % 2 == 0) {
        console.log(2);
        number /= 2;
    }
    for (let indexValue = 3; indexValue * indexValue <= number; indexValue += 2) {
        while (number % indexValue == 0) {
            console.log(indexValue);
            number = number / indexValue;
        }
    }
    if (number > 2) {
        console.log(number);
    }
}
