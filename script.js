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

// const frieds = ['Dejan', 'Katarina', 'Ivana', 'Zeljko'];

// console.log(frieds);
// console.log(frieds[0]);
// console.log(frieds[2]);

// console.log(frieds.length);
// console.log(frieds[frieds.length - 1]);

// frieds[4] = 'Nemanja';
// console.log(frieds);
// const firstName = 'Dejan';
// const dejan = [firstName, 'Kurcubic', 2037 - 1989, frieds];
// console.log(dejan);

// Exercise:
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1989, 1985, 1996, 1990, 2020];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[2]);
// const age3 = calcAge2(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge2(years[0]),
//   calcAge2(years[2]),
//   calcAge2(years[years.length - 1]),
// ];

// console.log(ages);

// const frieds = ['Dejan', 'Katarina', 'Ivana', 'Nemanja'];
// // Add element
// frieds.push('Stojan');
// console.log(frieds);

// // Add element - first place
// frieds.unshift('Ceca');
// console.log(frieds);

// // Remove element - last place
// frieds.pop();
// console.log(frieds);
// const popped = frieds.pop();
// console.log(popped);
// console.log(frieds);

// //Remove element - first place
// frieds.shift();
// console.log(frieds);

// console.log(frieds.indexOf('Dejan'));
// console.log(frieds.indexOf('Katarina'));

// console.log(frieds.includes('Ivana'));
// console.log(frieds.includes('Buza'));

// if (frieds.includes('Katarina')) {
//   console.log('You have friend called Katarina');
// }

// Object:

// const dejan = {
//   firstName: 'Dejan',
//   lastName: 'Kurcubic',
//   age: 2023 - 1989,
//   job: 'salesman',
//   friends: ['Dejan', 'Katarina', 'Ivana', 'Nemanja'],
// };

// console.log(dejan);

// console.log(dejan.lastName);
// console.log(dejan['lastName']);

// const nameKey = 'Name';
// console.log(dejan['first' + nameKey]);
// console.log(dejan['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to known about Dejan? Choose between firstName, lastName, age, friends'
// );
// if (dejan[interestedIn]) {
//   console.log(dejan[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose something between firstName, lastName, age or friends.'
//   );
// }

// dejan.location = 'Serbia';
// dejan['twitter'] = '@shooockergmail';
// console.log(dejan);

// Challenge :
// Dejan has 4 friends, and his best friend is called Nemanja.

// const test = `${dejan.firstName} has ${dejan.friends.length} friends, and his best friend is called ${dejan.friends[3]}.`;

// console.log(test);

const dejan = {
  firstName: 'Dejan',
  lastName: 'Kurcubic',
  birthYear: 1989,
  job: 'salesman',
  friends: ['Dejan', 'Katarina', 'Ivana', 'Nemanja'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this.job);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(dejan.calcAge());
console.log(dejan.age);
console.log(dejan.age);
console.log(dejan.age);
