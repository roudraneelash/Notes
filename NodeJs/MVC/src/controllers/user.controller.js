import userModel from "../model/user.model.js";
import productModel from "../model/product.model.js";

export default class UserController {
  getRegister(req, res) {
    return res.render("register", { errorMessage: null });
  }
  getLogin(req, res) {
    return res.render("login");
  }
  createNewUser(req, res) {
    userModel.createNewUser(req.body);
    res.redirect("/login");
  }
  createSession(req, res) {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = userModel.findUser(email);

    if (user) {
      if (user.password === password) {
        console.log("Logged In");
        req.session.userEmail = email;
        res.redirect("/");
      } else {
        // Password incorrect, send an error response
        res.status(401).send("Incorrect password");
      }
    } else {
      // No user found, send an error response
      res.status(404).send("User not found");
    }
  }

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("login");
      }
    });
  }
}
