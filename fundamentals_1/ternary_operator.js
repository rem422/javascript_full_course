const age = 23;

// age >= 18 ? console.log(` I like to drink wine`) :
// console.log(`I like to drink water`);

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;

if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

