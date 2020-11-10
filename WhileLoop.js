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