const p = new Promise((resolve, reject) => {
  resolve("Promise is fulfilled");
});

//async function always return a promise,
async function getData1() {
  return p;
}
// if we return any non promise element, it will wrap it inside a promise and send it as a promise
async function getData() {
  return "Hello world";
}

const promiseData = getData();
console.log(promiseData);
getData1().then((res) => {
  console.log(res);
});

// -- to handle a promise without async await
// function handlePromise() {
// let val;
//   p.then((res) => {
// val = res;
//     console.log(res);
//   });
// }

// handlePromise();
// -- with async await

async function handlePromise() {
  const val = await p;
  console.log(val);
}

await handlePromise();
