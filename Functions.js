//Temperature Conversion F to C/ C to F
{
    const prompt = require('prompt-sync')();
    let unit = prompt("Unit ");

    function checkCorrectInput(temperature) {
        if (unit == 'F') {
            if (temperature < 32 || temperature > 212) {
                console.log("INVALID");
                return false;
            } else {
                return true;
            }
        } else if (unit == 'C') {
            if (temperature < 0 || temperature > 100) {
                console.log("INVALID");
                return false;
            } else {
                return true;
            }
        }
    }

    function celciusToFahrenheit(temperature) {
        return (temperature * (9 / 5)) + 32;
    }

    function fahrenheitToCelcius(temperature) {
        return (temperature - 32) * (5 / 9);
    }

    switch (unit) {
        case 'F':
            let valueF = parseFloat(prompt("Enter the temperature In Fahrenheit "));
            if (checkCorrectInput(valueF)) {
                console.log("Temprature in celcius is " + fahrenheitToCelcius(valueF));
            }
            break;
        case 'C':
            let valueC = parseFloat(prompt("Enter the temperature in Celcius "));
            if (checkCorrectInput(valueC)) {
                console.log("Temperature in Fahrenheit is " + celciusToFahrenheit(valueC));
            }
            break;
        default:
            console.log("Invalid!!!");
    }
}

//Check Palindromes
{
    const prompt = require('prompt-sync')();
    let numberOne = parseInt(prompt("Enter a number "));
    let numberTwo = parseInt(prompt("Enter a number "));

    function checkPalindrome(numberOne, numberTwo) {
        let palindrome = 0;
        while (numberOne > 0) {
            palindrome = palindrome * 10 + (numberOne % 10);
            number1 = Math.floor(numberOne / 10);
        }
        return palindrome == numberTwo;
    }

    if (checkPalindrome(numberOne, numberTwo)) {
        console.log("Palindromes");
    } else {
        console.log("Not Palindromes");
    }
}