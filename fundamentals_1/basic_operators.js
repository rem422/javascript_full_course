// Ann operator basically allows use to transform values or combine multiple values.

//Types of operators:

//1. Mathematical operators.
//2. Comparison operators.
//3. Logical operators.
//4. Assignment operators.


// Mathematical operators
const currentYear = 2025;
const ageRem = currentYear - 2000;
const ageSarah = currentYear - 2016;
console.log(ageRem, ageSarah);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageRem * 2, ageRem / 10, 2 ** 3);

//String concatination
const firstName = 'Rem';
const lastName = 'Simiyu';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
console.log(x);

//Comparison operators
//>, <, >=, <=
console.log(ageRem > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 2000 > currentYear - 2016);






