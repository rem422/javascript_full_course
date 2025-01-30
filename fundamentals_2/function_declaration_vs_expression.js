// Function declaration
function calcAge1(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
const age2 = calcAge2(1989);
console.log(age2);