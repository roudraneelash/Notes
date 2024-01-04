import Express from "express";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import UserController from "./src/controllers/user.controller.js";
import { validateProductForm } from "./src/middlewares/validateProductFrom.js";
import { uploadFile } from "./src/middlewares/fileUpload.js";
import session from "express-session";
import { validateUserRegistration } from "./src/middlewares/validateUserRegistration.js";
import { auth } from "./src/middlewares/auth.js";
import cookieParser from "cookie-parser";
import { lastVisited } from "./src/middlewares/lastvisited.js";

const PORT = 8000;
const productController = new ProductController();
const userController = new UserController();
const app = Express();

//parse form data
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join("src", "views"));
app.use(ejsLayout);
app.use(cookieParser());

// config express session
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    // to handle req from http also
  })
);

// last visit
app.use(lastVisited);
// app.use(auth);
//register user
app.get("/register", userController.getRegister);
app.post("/createuser", validateUserRegistration, userController.createNewUser);

//login user
app.get("/login", userController.getLogin);
app.post("/createSession", userController.createSession);
//logout
app.get("/logout", userController.logout);
//products
app.get("/", auth, productController.getProducts);
app.get("/addProduct", auth, productController.getAddProduct);
app.post(
  "/createNewProduct",
  auth,
  uploadFile.single("imageUrl"),
  validateProductForm,
  productController.createNewProduct
);
// uploadFile.single('pass the image input field name")

app.get("/updateProduct/:id", auth, productController.getUpdateProduct);

app.post(
  "/updateProduct/:id",
  auth,
  validateProductForm,
  productController.postUpdateProduct
);

app.get("/deleteProduct/:id", auth, productController.deleteProduct);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
