const currentYear = new Date().getFullYear();

const person = [
    "Rem", 
    "Simiyu", 
    currentYear - 2000, 
    "Software Engineer", 
    ["Miles", "Jonas", "Micheal"],
    true
];

const types = [];

for(let i = 0; i < person.length; i++) {
    // Reading from person array
    console.log(person[i], typeof person[i]);

    // Filling types array
    // types [i] = typeof person[i];
    types.push(typeof person[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(currentYear - years[i]);
    console.log(ages[i]);
};

//continue and break statements

//Continue statement
console.log('---ONLY STRINGS---');
for (let i = 0; i < person.length; i++) {
    if(typeof person[i] !== 'string') continue;

    console.log(person[i], typeof person[i]);
} 

//Break statement
console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < person.length; i++) {
    if (typeof person[i] === "number") break;

    console.log(person[i], typeof person[i]);
} 

