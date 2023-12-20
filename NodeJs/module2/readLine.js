// To use the callback and sync APIs:(using callbacks)

const readline = require("node:readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Your first name?", (fname) => {
//   rl.question("Last name?", (lname) => {
//     console.log(`Hello ${fname} ${lname}`);
//     rl.close();
//   });
// });

//use promise/async/await syntax
{
  const readline = require("node:readline/promises");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const greetFun = async function () {
    const fname = await rl.question("your first name \n"); //accepts an input
    const lname = await rl.question("your last name \n"); //accepts an input
    const greeting = `Hello ${fname} ${lname}`;
    // console.log(greeting);
    rl.close();
    return greeting;
  };
  // Using 'await' to get the result
  (async () => {
    const result = await greetFun();
    console.log(result);
  })();
}
