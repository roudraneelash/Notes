const fs = require("fs");
const UserEvent = require("./emailNotification");

async function saveFile({ name, email, message }) {
  console.log("from save file");
  fs.appendFileSync(
    "queries.txt",
    `name:${name}\nemail:${email}\nmessage:${message}`
  );
}
module.exports = async function handleEmail(email) {
  const emailNotification = new UserEvent();
  emailNotification.sendMail(email);
  emailNotification.addListener("mailSent", () => {
    console.log("Email sent successfully");
    res.end("email sent");
  });
};

module.exports = saveFile;
