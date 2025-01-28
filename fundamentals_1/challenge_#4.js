/*
1. It's not allowed to use an if/else statement (If it's easier for you , you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill, value, the tip and final value (bill + tip).
Example: `The bill was 275, the tip was 41.25, and the total value is 316.25`.

TEST DATA: Test for bill value 275, 40 and 430.

HINT: To calculate 20% of value, simply multiply it 20 / 100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300

GOOD LUCK
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
