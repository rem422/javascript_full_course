/*
TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position and that values can actually be the returned value of a function! So you can just call a function as array value (so don't store the tip values in separate variables first, but right in the new array).

GOOD LUCK
*/

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


console.log(bills, tips, totals);
