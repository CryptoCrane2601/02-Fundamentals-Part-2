'use strict';

// Function expression:

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// Arrow function:

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   return `${firstName} retires in ${retirment} years.`;
// };

// console.log(yearsUntilRetirement(1989, 'Dejan'));
// console.log(yearsUntilRetirement(1996, 'Katarina'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(2, 4);
