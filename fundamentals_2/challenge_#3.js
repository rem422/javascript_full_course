/*
1. For each of them, create an object with properties for their full name, mass, and height (mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example output: "Mark Miller's BMI is (24.9), and John Smith's BMI is (21.5)!"


TEST DATA: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return Math.trunc(this.mass / (this.height ** 2)) ;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return Math.trunc(this.mass / (this.height ** 2)) ;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})!`);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.calcBMI()})!`);
}
