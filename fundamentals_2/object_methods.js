const currentYear = new Date().getFullYear();

const person = {
    firstName: "Rem",
    lastName: "Simiyu",
    birthYear: 2000,
    job: "Software Engineer",
    hobby: "Music",
    friends: ["Miles", "Jonas", "Micheal"],
    hasDriversLicense: true,
    
    // calcAge: function(birthYear) {
    //     return currentYear - birthYear;
    // },

    // calcAge: function (){
    //     // console.log(this);
    //     return currentYear - this.birthYear;
    // },

    calcAge: function (){
        this.age = currentYear - this.birthYear;
        return this.age;
    },

    driver: function () {
        return this.hasDriversLicense ? "has a driver's license" : "does not have a driver's license";
    }
};

console.log(person.calcAge());

console.log(person.age);
console.log(person.age);
console.log(person.age);
// console.log(person.calcAge(1966));

//Challenge
// "Rem is a 25 years old teacher, and he has a/no driver's license."
console.log(`${person.firstName} is a ${person.calcAge()} years old, and He ${person.driver()}.`);











