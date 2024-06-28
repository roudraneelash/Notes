//example of variable hoisting
console.log(a); //output:undefined
console.log(b); //cannot access b before initialization , i.e due to TDZ , time between defining & initialization
console.log(c); //cannot access b before initialization , i.e due to TDZ , time between defining & initialization

var a = 9;
let b = 9;
const c = 9;

//examples of function hositing
console.log(addDeclr(2, 3)); //output:5
console.log(addExp(2, 3)); //add Exp undefined
console.log(addArrow(2, 3)); //add arrow undefines
//function declaration
function addDeclr(a, b) {
  return a + b;
}
const addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
