'use strict'

// A function is a piece of code that we can reuse over and over again in our code.
// functions allows us to write more maintainable code.

function logger () {
    console.log(`My name is Rem`);
}
// calling, running, invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const fruiteJuice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return fruiteJuice;
}

const appleJuice =  fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
console.log(typeof num);