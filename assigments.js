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

const worldPopulation = 7900;
const serbiaPopulation = 6.7;
const croatiaPopulation = 3;
const finlandPopulation = 6;

// Function declaraation:
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const serbia = percentageOfWorld1(serbiaPopulation);
console.log(serbia);
const croatia = percentageOfWorld1(croatiaPopulation);
console.log(croatia);
const finland = percentageOfWorld1(finlandPopulation);
console.log(finland);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const serbia2 = percentageOfWorld2(serbiaPopulation);
console.log(serbia2);
const croatia2 = percentageOfWorld2(croatiaPopulation);
console.log(croatia2);
const finland2 = percentageOfWorld2(finlandPopulation);
console.log(finland2);
