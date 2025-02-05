const currentYear = new Date().getFullYear();

const person = {
    firstName: 'Rem',
    lastName: 'Simiyu',
    age: currentYear - 2000,
    city: 'Nakuru',
    job: 'Software Engineer',
    hobby: 'Music',
    friends: ['Miles', 'Jonas', 'Micheal'],
}

person.firstName = 'John';

console.log(`I am ${person.firstName} ${person.lastName} from ${person.city} and I am a ${person.age} years old ${person.job}`);




