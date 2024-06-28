/*
this keyword always refer to the object that called the method
lexical scope is the ability to access variables from parent scope

Method: this=<object that is calling the method>
simple function call: this=undefined
Arrow functions: this=<this of surrounding  function(lexical this)>
Event listener: this=<DOM element that the handler is attached to>

*/

console.log(this); //refers to the window object

function add(a, b) {
  console.log(this);
  return a + b;
}
add(2, 3); //this is undefined
//in regular functioin call this is undefined

const add = (a, b) => {
  return a + b;
  console.log(this);
};
add(2, 3);

//bind(); explicit binding of the this keyword
const CN = {
  name: "Coding Ninjas",
};

function print() {
  console.log(this);
}

print.bind(CN)(); //passing CN
// .apply(object);
// .bind(object);
// .call(object);explicit binding
