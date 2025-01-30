//Arrow function
const currentYear = new Date().getFullYear();

const calcAge3 = birthYear => currentYear - birthYear;
console.log(calcAge3(2004));

const yearsUntilRetirement = (firstname, birthYear) =>{
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years.`;
}
    console.log(yearsUntilRetirement('Rem',2000));
    console.log(yearsUntilRetirement('Gideon',1996));
