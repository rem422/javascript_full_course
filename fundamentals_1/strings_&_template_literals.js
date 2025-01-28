const firstName = 'Rem';
const job = 'Developer';
const birthYear = 2000;
const year = 2025;

// String concatination
const rem = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!';
console.log(rem);

// Template Literal
const remNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(remNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
line`);



