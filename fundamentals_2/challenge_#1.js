/*
5. Ignore draws this time.

TEST DATA 1:
Dolphins score 44, 23 and 71. koalas score 65, 54 and 49.
TEST DATA 2:
Dolphins score 85, 54 and 41. koalas score 23, 34 and 27.

HINT:
To calculate average of 3 values, add them all together and divide by 3.

HINT:
To check if number A is at least double number B, check for A >= 2 * B. Apply this to the teem average scores

GOOD LUCK!
*/

const averageScore = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
};

//Test 1
let scoreDolphins = averageScore(44,23, 71);
let scoreKoalas = averageScore(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = averageScore(85,54, 41);
scoreKoalas = averageScore(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
