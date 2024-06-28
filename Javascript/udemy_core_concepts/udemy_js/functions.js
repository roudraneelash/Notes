//fucntion declartions
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);
//standard form of declaring a function

//function expressions

//annonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(calcAge2(1991));

//arrow Functions
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

const retirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  return `${firstName} retires after ${65 - age}`;
};
console.log(retirement(1998, "Sunny"));

//////////coding challenges

const calAverage = (a, b, c) => (a - 0 + b - 0 + c - 0) / 3;

// const avgDolphines = calAverage(44, 23, 71);
// const avgKoalas = calAverage(65, 54, 49);

const avgDolphines = calAverage(85, 54, 41);
const avgKoalas = calAverage(23, 34, 27);

const checkWinner = (avgDolphines, avgKoalas) => {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphines} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
  } else {
    console.log(avgDolphines, avgKoalas);
  }
};

checkWinner(avgDolphines, avgKoalas);
