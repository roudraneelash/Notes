import productModel from "../model/product.model.js";

class ProductController {
  getProducts(req, res) {
    console.log(productModel.getAll());
    return res.render("products", { products: productModel.getAll() });
  }
  getAddProduct(req, res) {
    return res.render("addProductForm", {
      errorMessage: null,
      formData: null,
    });
  }
  createNewProduct(req, res) {
    const { name, price, description } = req.body;
    const imageUrl = "images/" + req.file.filename;

    productModel.addNew(name, price, description, imageUrl);
    res.redirect("/");
  }
  getUpdateProduct(req, res, next) {
    const { id } = req.params;
    const product = productModel.getById(id);
    if (product) {
      res.render("update-product-form", {
        errorMessage: null,
        product,
      });
    } else {
      res.status(401).send("Product not found");
    }
  }
  postUpdateProduct(req, res, next) {
    try {
      productModel.updateProduct(req.body);
      return res.redirect("/");
    } catch (err) {
      res.status(404).send("Product not found");
    }
  }
  deleteProduct(req, res, next) {
    const id = Number(req.params.id);
    console.log(id);
    productModel.deleteProduct(id);
    res.redirect("/");
  }
}

export default ProductController;
