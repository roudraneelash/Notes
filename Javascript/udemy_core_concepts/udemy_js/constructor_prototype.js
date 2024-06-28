"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never use this as it will create this property for all the objects of Perosn type
  //rather use prototype
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

//1.new {} obj is created
//2. function is called , this ={}
//3.{} linked to prototype
//4.function automatically return {}

// now we  can create multiple instances of Person class

const matilda = new Person("matilda", 1975);
const jack = new Person("Jack", 1977);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//prototypes are linked to the respective objects not the class

console.log(jack instanceof Person); //boolean check if jack is a instance of Person or not

function User(name) {
  this.name = name;
  this.getThis = function () {
    console.log(this);
  };
}

var obj1 = new User("moon");
var obj2 = new User("sunny");

console.log(obj1.getThis === obj2.getThis);

//prototype

function User(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
User.prototype.getName = function () {
  return this.name;
};
var obj1 = new User("moon");
var obj2 = new User("sunny");
