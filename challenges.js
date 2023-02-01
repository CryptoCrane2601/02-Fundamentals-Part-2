'use strict';

// Coding Challenge #1

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// console.log(calcAverage(3, 4, 5));
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const scoreDolphins = calcAverage(85, 254, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`Nobody wins`);
//   }
// }

// const winner = checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK

const bills = [125, 555, 44];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(total);
