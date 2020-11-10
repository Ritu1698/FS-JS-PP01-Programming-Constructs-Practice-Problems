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