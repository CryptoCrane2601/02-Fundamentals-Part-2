'use strict';
// Lecture 1 - Functions :

// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const firstCountry = describeCountry('Serbia', 7, 'Belgrade');
// console.log(firstCountry);
// const secondCountry = describeCountry('Finland', 6, 'Helsinki');
// console.log(secondCountry);
// const thirdCountry = describeCountry('Croatia', 3, 'Zagreb');
// console.log(thirdCountry);

// LECTURE: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// const worldPopulation = 7900;
// const serbiaPopulation = 6.7;
// const croatiaPopulation = 3;
// const finlandPopulation = 6;

// Function declaraation:
// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }

// const serbia = percentageOfWorld1(serbiaPopulation);
// console.log(serbia);
// const croatia = percentageOfWorld1(croatiaPopulation);
// console.log(croatia);
// const finland = percentageOfWorld1(finlandPopulation);
// console.log(finland);

// function expression:
// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };

// const serbia2 = percentageOfWorld2(serbiaPopulation);
// console.log(serbia2);
// const croatia2 = percentageOfWorld2(croatiaPopulation);
// console.log(croatia2);
// const finland2 = percentageOfWorld2(finlandPopulation);
// console.log(finland2);

// arrow function:
// Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

// const serbia3 = percentageOfWorld3(serbiaPopulation);
// console.log(serbia3);
// const croatia3 = percentageOfWorld3(croatiaPopulation);
// console.log(croatia3);
// const finland3 = percentageOfWorld3(finlandPopulation);
// console.log(finland3);

// LECTURE: Functions Calling Other Functions

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// const worldPopulation = 7900;

// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld2(population);
//   return `${country} has ${population} milion people, which is ${percentage} of the world.`;
// }

// console.log(describePopulation('Serbia', 6.7));
// console.log(describePopulation('Croatia', 3));
// console.log(describePopulation('Finland', 6));

// LECTURE: Introduction to Arrays:

// const populations = [6, 3, 6.7, 33];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// LECTURE: Basic Array Operations (Methods):

// const neighbours = [
//   'Hungary',
//   'Croatia',
//   'B&H',
//   'Montenegro',
//   'Macedonia',
//   'Bulgaria',
//   'Romania',
// ];

// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// if (neighbours.includes('Germany')) {
//   console.log('This is central European country');
// } else {
//   console.log('Probably not a central European country :D');
// }

// neighbours[3] = 'Crna Gora';
// console.log(neighbours);

// LECTURE: Introduction to Objects:

// const myCountry = {
//   country: 'Serbia',
//   capital: 'Belgrade',
//   language: 'serbian',
//   population: 6.5,
//   neighbours: [
//     'Hungary',
//     'Croatia',
//     'B&H',
//     'Montenegro',
//     'Macedonia',
//     'Bulgaria',
//     'Romania',
//   ],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   isIsland: this.neighbours > 0 ? true : false,
// };

// myCountry.describe();
// console.log(myCountry.isIsland);

// console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation

// Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// console.log(myCountry.population + 2);
// console.log(myCountry['population'] - 2);

//LECTURE: Iteration: The for Loop

// There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
