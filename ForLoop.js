//Powers Of 2
{
    const prompt = require('prompt-sync')();
    let powerOfTwo = prompt('Enter number to be the maximum power ');
    for (let indexValue = 0; indexValue <= powerOfTwo; indexValue++) {
        console.log(2 ** indexValue);
    }
}