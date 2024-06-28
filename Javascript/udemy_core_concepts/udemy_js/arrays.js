//
const friends = new Array("Chandler", "Rachael", "Joey", "Pheobe");
console.log(friends);

const newLength = friends.push("Ross"); //add at the end
console.log(newLength);

friends.unshift("Joey"); //add at the beginning
console.log(friends);

const popped = friends.pop(); //remove the last element
console.log(popped);
console.log(friends);

friends.unshift("Joey"); //remove from the beginning
console.log(friends);

console.log(friends.indexOf("Joey")); //returns the index of the element

console.log(friends.includes("Joey")); //boolean value

//challenger 4

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = new Array();
let totals = new Array();

const calTip = function (x) {
  let tip = x > 50 && x < 300 ? 0.15 * x : 0.2 * x;
  return tip;
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calTip(bills(i)));
  totals.push(tips(i) + bills(i));
}
console.log(bills);
console.log(tips);
console.log(totals);
