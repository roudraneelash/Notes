import { body, validationResult } from "express-validator";

export const validateUserRegistration = async (req, res, next) => {
  // Create rules
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Enter a valid email address"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("confirmPassword")
      .notEmpty()
      .withMessage("Confirm Password is required")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords do not match");
        }
        return true;
      }),
  ];

  // Run rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // Show errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("register", {
      errorMessage: errors.array()[0].msg,
      formData: req.body,
    });
  } else {
    next();
  }
};
