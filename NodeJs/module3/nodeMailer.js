// install nodemailer package
//configure email and send it
const nodemailer = require("nodemailer");
async function sendMail() {
  // 1.create email transporter

  // configure SMTP(send mail trasnfer protocol) server
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
    to: "ash.roudraneel@gmail.com",
    subject: "NodeMailer",
    text: "Welcome to the learning of NodeJs.",
  };
  //send email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email sent failed\n", err);
  }
}
sendMail();
