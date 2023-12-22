const Express = require("express");
const app = Express();

const firstMiddleware = (req, res, next) => {
  console.log("This is the 1st middleware");
  next();
};
const secondMiddleware = (req, res, next) => {
  console.log("This is Second middleware");
  next();
};
const globalMiddleware = (req, res, next) => {
  console.log("Application-level middleware");
  next();
};
// if we want to use any app-level middleware, we use .use()
app.use(globalMiddleware);

// route-level middleware
app.get("/send", [firstMiddleware, secondMiddleware], (req, res) => {
  //we can pass array of middlewares , order of Middlewares matter
  res.end("Middleware testing in express");
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
