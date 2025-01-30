const currentYear = new Date().getFullYear();

const calcAge = (birthYear) => {
    return  currentYear - birthYear;
}

const yearsUntilRetirement = (firstname, birthYear) =>{
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired.`);
        return  -1;
    }
}

console.log(yearsUntilRetirement('Rem', 2000));
console.log(yearsUntilRetirement('Mike', 1952));