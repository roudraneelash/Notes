//Array is also like an object ,  but it is defined in a sequential manner , can be accesses according to the index no
const jonasArray = [
  "Jonas",
  "Ash",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
//objects is the another type of Data Structure in JS
//objects has prop-value pair , it can be access by jonas.prop name
const jona = {
  firstName: "Sunny",
  lastName: "Ash",
  age: 2022 - 1998,
  job: "SDE",
  friends: ["Joey", "Ross", "Phil"],
};

//accessing object properties using dot notation/string

console.log(jonas.firstName);
console.log(jonas.lastName);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
//property acts like index in array for objects

//objects  methods , function expressions , functions can be stored under variables , for objects it can be stored under properties of an object

const jonas = {
  firstName: "Sunny",
  lastName: "Ash",
  birthYear: 1998,
  job: "SDE",
  friends: ["Joey", "Ross", "Phil"],
  calcAge: function () {
    return 2022 - this.birthYear; //this refers to the object itself calling the method
  },
};

console.log(jonas.calcAge());

//challenge
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

const ans =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
    : `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`;
console.log(ans);
