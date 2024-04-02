const cart = ["shoes", "shirt", "pant"];
//callback
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWalletBalance();
  });

// -- a promise on resolve returns a promise to the next promise chain, to  simplify using arrow function

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then(() => updateWalletBalance());

// orderID = createOrder(cart); // it is an async operation that creates and order and return an orderID.
// async proceedToPayment(orderID); // it calls the next method

// - so previously we use to handle it using callBacks.

//callback pattern to handle async operations
// -- inversion of AbortController(i.e  the control  to invoke proceedToPayment is given to createOrder function)
// -- pyramid structure,
// createOrder(cart, function (orderID) {
//   proceedToPayment(orderID);
// });

// it can be modified using promises.

// const promise= createOrder(cart);
// promise.then(function(orderId){
//   proceedToPayment(orderId);
// })

// promise is an Object with empty data at the beginning , after asyn operation it fills with some data.Object

// defination: Promises are an object that represents eventual completion of an async operation.
const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const users = fetch(GITHUB_API);
users.then(function (data) {
  console.log(data);
});
