const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports.sendEmail = async (event) => {
  try {
    let mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: event.email,
      subject: event.subject,
      text: event.emailBody,
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail(mailOptions);

    let response = {
      message: "Email sent successfully",
    };

    return response;
  } catch (error) {
    let errorMessage = {
      message: "error occured while sending mail",
      error: error.message,
    };

    return errorMessage;
  }
};

