export default class userModel {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static getAllUsers() {
    return users;
  }
  static createNewUser(user) {
    const { name, email, password } = user;
    const newUser = new userModel(name, email, password);
    users.push(newUser);
  }
  static findUser(email) {
    return users.find((user) => user.email == email);
  }
}

const users = [];
