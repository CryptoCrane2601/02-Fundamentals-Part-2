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

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }

// const fruit1 = fruitProcessor(2, 3);
// console.log(fruit1);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirment = 65 - age;
//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years.`);
//     return retirment;
//   } else {
//     console.log(`${firstName} already retired!🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1989, 'Dejan'));
// console.log(yearsUntilRetirement(1968, 'Dejan'));

// Arrays

const frieds = ['Dejan', 'Katarina', 'Ivana', 'Zeljko'];

console.log(frieds);
console.log(frieds[0]);
console.log(frieds[2]);

console.log(frieds.length);
