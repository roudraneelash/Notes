import Express from "express";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import { validateProductForm } from "./src/middlewares/validateProductFrom.js";

const PORT = 8000;
const productController = new ProductController();
const app = Express();

//parse form data
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join("src", "views"));
app.use(ejsLayout);

// get request
app.get("/", productController.getProducts);
app.get("/addProduct", productController.getAddProduct);
app.post(
  "/createNewProduct",
  validateProductForm,
  productController.createNewProduct
);

app.get("/updateProduct/:id", productController.getUpdateProduct);

app.post(
  "/updateProduct/:id",
  validateProductForm,
  productController.postUpdateProduct
);

app.get("/deleteProduct/:id", productController.deleteProduct);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
