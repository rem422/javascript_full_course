/* 
1. Store Mark's and John's mass and heights in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions).
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1:
Mark weights 78kg and is 1.69m tall.
John weights 92kg and is 1.95m tall.
TEST DATA 2:
Mark weights 95kg and is 1.88m tall.
John weights 85kg and is 1.75m tall.
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
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);



