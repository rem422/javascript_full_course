const age = 18;
//strict equality operator
if(age === 18) console.log('You just became an adult!');

//loose equality operator
if(age == 18) console.log('You just became an adult!');

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 4 === 4
    console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`Cool! 7 is an amazing number`);
} else if (favourite === 9) {
    console.log(`Cool! 9 is an amazing number`);
} else {
    console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23) {
    console.log('Why not 23?');
}
