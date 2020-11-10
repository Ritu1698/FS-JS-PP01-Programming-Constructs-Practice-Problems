//Random function to get single digit
{
    let rabdomNumber = Math.floor(Math.random() * 10);
    console.log("Random Number: " + rabdomNumber);
}
//Random function to get dice value
{
    let diceValue = Math.ceil(Math.random() * 10) % 6 + 1;
    console.log("Number on Dice: " + diceValue);
}

//Add two random dice numbers
{
    let diceValueOne = Math.floor(Math.random() * 6) + 1;
    let diceValueTwo = Math.floor(Math.random() * 6) + 1;
    let sum = diceValueOne + diceValueTwo;
    console.log("Random 2 Dices Sum: " + sum);
}

//Sum and Average of 5 Random 2 digit numbers
{
    let sum = 0;
    for (let indexValue = 0; indexValue < 5; indexValue++) {
        sum += Math.floor(Math.random() * 90) + 10;
    }
    console.log("Sum Value: " + sum + " Avg Value: " + sum / 5);
}

//Unit Conversion
{
    const INCH_IN_TERMS_OF_FEET = 1 / 12;
    const FEET_IN_TERMS_OF_METER = 0.3048;
    const ACRE_IN_TERMS_OF_SQ_METER = 4046.86;
    console.log("42 inchs = " + INCH_IN_TERMS_OF_FEET * 42 + " ft");
    let length = 60;
    let breadth = 40;
    let area = length * FEET_IN_TERMS_OF_METER * breadth * FEET_IN_TERMS_OF_METER;
    console.log("Area in meters square terms: " + area);
    console.log("Area of 25 such plots in acres: " + 25 * area / ACRE_IN_TERMS_OF_SQ_METER);
}