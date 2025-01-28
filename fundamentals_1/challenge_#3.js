/*
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average scores).

3. BONUS 1: Include a requirement for a minimum score 0f 100. With this rule, a team only wins if it has a higher score than the other team and the same time a score of at least 100 points. HINT: use logical operators to test for minimum score, as well as multiple else-if blocks.

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. koalas score 109, 95 and 106.

GOOD LUCK!
*/
//Test 1
const dolphinsScore = Math.trunc((96 + 108 + 89) / 3);
const koalasScore = Math.trunc((88 + 91 + 110) / 3);
console.log(dolphinsScore, koalasScore);

//Test 2
// const dolphinsScore = Math.trunc((97 + 112 + 101) / 3);
// const koalasScore = Math.trunc((109 + 95 + 123) / 3);
// console.log(dolphinsScore, koalasScore);

//Test 3
// const dolphinsScore = Math.trunc((97 + 112 + 101) / 3);
// const koalasScore = Math.trunc((109 + 95 + 106) / 3);
// console.log(dolphinsScore, koalasScore);

const minimumScore = 100;

if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore) {
    console.log(`The dolphin wins the trophy with the score of ${dolphinsScore}`);
} else if (koalasScore > dolphinsScore && koalasScore >= minimumScore) {
    console.log(`The koalas wins the trophy with the score of ${koalasScore}`);
} else if (dolphinsScore === koalasScore && dolphinsScore >= minimumScore || koalasScore === dolphinsScore && koalasScore >= minimumScore) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`No team wins the trophy!`);
}

