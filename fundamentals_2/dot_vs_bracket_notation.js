const currentYear = new Date().getFullYear();

const person = {
    firstName: "Rem",
    lastName: "Simiyu",
    age: currentYear - 2000,
    city: "Nakuru",
    job: "Software Engineer",
    hobby: "Music",
    friends: ["Miles", "Jonas", "Micheal"],
};

// Dot notation
console.log(`I am ${person.firstName} ${person.lastName} from ${person.city} and I am a ${person.age} years old ${person.job}. I love ${person.hobby} adnd my friends are ${person.friends}.`);


// Bracket notation
console.log(person['lastName']);

const nameKey = 'Name';
console.log(person['first' + nameKey]);
console.log(person['last' + nameKey]);

propt(`What do you want to know about me? Choose between 'firstName', 'lastName', 'age', 'city', 'job', 'hobby', or 'friends'.`);
