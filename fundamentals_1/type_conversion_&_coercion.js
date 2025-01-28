// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Rem'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm " + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + '1'; // "11".
n = n - 1; //convert string "11" into a number and subtracts 1 from 11.
console.log(n);

let n2 = 2 + 3 + 4 + '5';
console.log(n2);
console.log(typeof n2);

let n3 = "10" - "4" - "3" - 2 + "5";
console.log(n3);
console.log(typeof n3);

