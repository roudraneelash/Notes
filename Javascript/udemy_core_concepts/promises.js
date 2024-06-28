// promises is a token / or a state when the request is send
// it has got 3states , 1. Fulfilled 2.Pending 3.Rejected
//if the promise returns a reject state or a fulfilled state , then the promise is considered as completed , else it remains in the pending state

//to get the resolve state , we need to chain then, for rejected , need to chain catch

let promise = new Promise((resolve, reject) => {
  resolve("Yea Promise Fulfilled");
});

console.log(promise);
//output
/*
{<fulfilled>: 'Yea Promise Fulfilled'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"Yea Promise Fulfilled"*/

promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

promise
  .then((data) => {
    //then will be called when the promise sends a resolve state, i.e the promsie is fulfilled
    console.log(data);
  })
  .catch((error) => {
    //catch will be called when the promise sends a resolve state, i.e the promsie is fulfilled
    console.log(error);
  });
