const currentYear = new Date().getFullYear();

const person = [
    "Rem",
    "Simiyu",
    currentYear - 2000,
    "Software Engineer",
    ["Miles", "Jonas", "Micheal"],
    true
];

for (let i = person.length - 1; i >= 0; i--) {
    console.log(i, person[i]);
}

//nested for loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------- Starting exercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

