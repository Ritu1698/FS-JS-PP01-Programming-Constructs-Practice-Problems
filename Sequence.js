//Random function to get single digit
let rabdomNumber = Math.floor(Math.random() * 10);
console.log("Random Number: " + rabdomNumber);

//Random function to get dice value
let diceValue = Math.ceil(Math.random() * 10) % 6 + 1;
console.log("Number on Dice: " + diceValue);

//Add two random dice numbers
{
    let diceValueOne = Math.floor(Math.random() * 6) + 1;
    let diceValueTwo = Math.floor(Math.random() * 6) + 1;
    let sum = diceValueOne + diceValueTwo;
    console.log("Random 2 Dices Sum: " + sum);
}