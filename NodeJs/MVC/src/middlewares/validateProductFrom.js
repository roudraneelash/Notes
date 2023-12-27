import { body, validationResult } from "express-validator";

export const validateProductFormManual = (req, res, next) => {
  let errors = [];
  const { name, price, description, imageUrl } = req.body;
  if (!name || name.trim() === "") {
    errors.push("name is required");
  }
  if (!price || parseFloat(price) < 0) {
    errors.push("price must be greater than 0");
  }
  if (!description || description.trim() == "") {
    errors.push("Description is required");
  }
  try {
    const url = new URL(imageUrl);
  } catch (err) {
    errors.push("Enter a valid url");
  }
  if (errors.length > 0) {
    return res.render("addProductForm", {
      errorMessage: errors[0],
      formData: req.body,
    });
  } else {
    next();
  }
};
export const validateProductForm = async (req, res, next) => {
  // Create rules
  const rules = [
    body("name").notEmpty().withMessage("Product Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),

    body("imageUrl").isURL().withMessage("Invalid Url"),
  ];

  // Run rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // Show errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("addProductForm", {
      errorMessage: errors.array()[0].msg,
      formData: req.body,
    });
  } else {
    next();
  }
};
