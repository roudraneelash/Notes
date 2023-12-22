const Events = require("events");
const nodemailer = require("nodemailer");

module.exports = class UserEvent extends Events.EventEmitter {
  async sendMail(email) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "das.rudra2504@gmail.com",
        pass: "offq rzqb cryw morl",
      },
    });
    //configure email
    const mailOptions = {
      from: "das.rudra2504@gmail.com",
      to: email,
      subject: "mail confirmation",
      text: "Successfully saved your file",
    };
    //send email
    try {
      const result = await transporter.sendMail(mailOptions);
      this.emit("mailSent");
    } catch (err) {
      console.log("Email sent failed\n", err);
    }
  }
};
