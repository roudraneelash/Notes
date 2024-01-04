import fs from "fs";
export default class productModel {
  constructor(__id, __name, __description, __price, __imageUrl) {
    this.id = __id;
    this.name = __name;
    this.price = __price;
    this.description = __description;
    this.imageUrl = __imageUrl;
  }
  static getAll() {
    return products;
  }
  static addNew(name, price, description, imageUrl) {
    let newProd = new productModel(
      products.length + 1,
      name,
      description,
      price,
      imageUrl
    );
    products.push(newProd);
  }
  static getById(id) {
    return products.find((prod) => prod.id == id);
  }
  static updateProduct(productObj) {
    const index = products.findIndex((prod) => prod.id == productObj.id);
    products[index] = productObj;
  }
  static deleteProduct(id) {
    const index = products.findIndex((prod) => prod.id == id);
    // to unlink the file uploaded
    // fs.unlinkSync("public/" + products[index].imageUrl);

    products.splice(index, 1);
  }
}

let products = [
  new productModel(
    1,
    "Atomic Habits",
    "A supremely practical and useful book.",
    300,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new productModel(
    2,
    "Ikigai",
    "The Japanese secret to a long and happy life",
    340,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new productModel(
    3,
    "Deep Work",
    "RULES FOR FOCUSED SUCCESS IN A DISTRACTED WORLD",
    280,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
