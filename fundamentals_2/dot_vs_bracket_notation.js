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

// const question = prompt(`What do you want to know about me? Choose between 'firstName', 'lastName', 'age', 'city', 'job', 'hobby', or 'friends'.`);

// if (person[question]) {
//     console.log(person[question]);
// } else {
//     console.log(`Wrong request! Please choose between 'firstName', 'lastName', 'age', 'city', 'job', 'hobby', or 'friends'.`);
// }

//adding properties to an object
person.country = "Kenya";
person.github = "https://github.com/remsimiyu";
console.log(person);

//challenge
// "Rem has 3 friends, and his best friend is called Micheal.
console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[2]}.`);


