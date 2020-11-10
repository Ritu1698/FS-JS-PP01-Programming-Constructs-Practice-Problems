//Write number in words
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter number between 0 and 9"));
    switch (number) {
        case 0:
            console.log('ZERO');
            break;
        case 1:
            console.log("ONE");
            break;
        case 2:
            console.log("TWO");
            break;
        case 3:
            console.log("THREE");
            break;
        case 4:
            console.log("FOUR");
            break;
        case 5:
            console.log("FIVE");
            break;
        case 6:
            console.log("SIX");
            break;
        case 7:
            console.log("SEVEN");
            break;
        case 8:
            console.log("EIGHT");
            break;
        case 9:
            console.log("NINE");
            break;
        default:
            console.log("INVALID!!!");
    }
}

//Check Day Using Number 1-7
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number between 1 and 7"));
    let day;
    switch (number) {
        case 1:
            day = 'Sunday'
            break;
        case 2:
            day = 'Monday';
            break;
        case 3:
            day = 'Tuesday';
            break;
        case 4:
            day = 'Wednesday';
            break;
        case 5:
            day = 'Thursday';
            break;
        case 6:
            day = 'Friday';
            break;
        case 7:
            day = 'Saturday';
            break;
        default:
            day = 'Invalid!!!';
            break;
    }
    console.log(day);
}

//Check unit, tens, hundreds places Of A 10s power Number
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number which is Tenth's power"));
    let numInWords;
    switch (number) {
        case 1:
            numInWords = 'Unit';
            break;
        case 10:
            numInWords = 'Ten';
            break;
        case 100:
            numInWords = 'Hundred';
            break;
        case 1000:
            numInWords = 'Thousand';
            break;
        case 10000:
            numInWords = 'Ten Thousand';
            break;
        default:
            numInWords = 'Improper Input';
            break;
    }
    console.log(numInWords);
}

//Unit Conversions
{
    const prompt = require('prompt-sync')();
    const INCH_IN_TERMS_OF_FEET = 1 / 12;
    const FEET_IN_TERMS_OF_INCH = 1 / 12;
    const FEET_IN_TERMS_OF_METER = 0.3048;
    const METER_IN_TERMS_OF_FEET = 3.28084;

    let value = parseFloat(prompt('Enter the value: '));
    let unit = prompt('Enter the unit: ');
    switch (unit) {
        case 'Inch':
            console.log("Value in Feet: " + value * INCH_IN_TERMS_OF_FEET);
            break;
        case 'Feet':
            console.log("Value in Inches: " + value * FEET_IN_TERMS_OF_INCH);
            console.log("Value in Meters: " + value * FEET_IN_TERMS_OF_METER);
            break;
        case 'Meter':
            console.log("Value in Feet: " + value * METER_IN_TERMS_OF_FEET);
            break;
        default:
            console.log("Invalid Unit!");
            break;
    }
}