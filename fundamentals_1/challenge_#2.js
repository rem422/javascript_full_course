/* 
Use BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's" or "John's BMI is higher than Mark's!"
2. Use template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: use the if/else statement

GOOD LUCK
 */


// TEST 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${Math.trunc(BMIMark)}) is higher than John's (${Math.trunc(BMIJohn)})!`);
} else {
    console.log(`John's BMI (${Math.trunc(BMIJohn)}) is higher than Mark's (${Math.trunc(BMIMark)})!`);
}