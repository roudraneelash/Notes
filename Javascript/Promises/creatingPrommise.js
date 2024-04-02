const cart = ["shoes", "shirt", "pant"];
//** */ return statement is mandatory to move to next promise chain
// catch handles all the error above it,
createOrder(cart)
  .then(function (orderID) {
    return console.log(orderID);
  })
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("no matter what it will excute");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validate cart
    //create orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderID = 12345;
    if (orderID) {
      setTimeout(function () {
        resolve(orderID);
      }, 5000);
    }
  });
  return pr;
}
function proceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Payment is successful");
    }, 2000);
  });
}

function validateCart(cart) {
  return true;
}
