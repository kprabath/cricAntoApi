const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { sendEmail } = require("../../common_functions/mailSender");
require("dotenv").config();

const User = require("../../models/user/Register");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+/*-!~";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

router.get("/", async (req, res) => {
  res.status(200).json({ message: "this is the login route" });
});

router.post("/", async (req, res) => {
  const { userName, password } = req.body;

  const userFromDb = await User.findOne({
    userName: userName,
  }).lean();

  try {
    if (!userFromDb.isOnlyDevice) {
      res.status(401).json({
        error: "Error",
        message: "You have logged in from a another device",
      });
    }
    if (await bcrypt.compare(password, userFromDb.password)) {
      const webToken = jwt.sign(
        {
          id: userFromDb._id,
          userName: userFromDb.userName,
        },
        process.env.JWT_SECRET
      );

      const responseUpdate = await User.updateOne(
        { _id: userFromDb._id },
        {
          $set: { isOnlyDevice: false },
        }
      );

      let emailBody = `You logged in from a device`;

      let event = {
        email: userFromDb.email,
        subject: "You have Logged in | Old Antonian Cricket Wing",
        emailBody: emailBody,
      };

      let mailResult = await sendEmail(event);

      res.status(200).json({
        status: "200 OK",
        token: webToken,
        message: "user Information Successfully Validated",
        mailResult: mailResult,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: "Error",
      errorMessage: error.message,
      message: "username / password is not valid",
    });
  }
});

router.post("/forgot_password", async (req, res) => {
  const { token } = req.body;
  try {
    let user = jwt.verify(token, process.env.JWT_SECRET);
    const userName = user.userName;
    const id = user.id;
    const email = req.body.email;

    const userFromDb = await User.findOne({
      userName: userName,
    }).lean();

    const tempPassword = generateString(10);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    const response = await User.updateOne(
      { _id: id },
      {
        $set: {
          password: hashedPassword,
          isTempPassword: true,
          isForgotPasswords: true,
          isOnlyDevice: true,
        },
      }
    );

    let emailBody = `The temporary password is ${tempPassword} `;

    let event = {
      email: email,
      subject: "Temporary Password | Old Antonian Cricket Wing",
      emailBody: emailBody,
    };

    let mailResult = await sendEmail(event);

    res.status(200).json({
      status: "200 OK",
      message: mailResult,
    });

    const tempPasswordDidNotChange = generateString(10);
    const tempPasswordDidNotChangeHashed = await bcrypt.hash(
      tempPasswordDidNotChange,
      10
    );

    setTimeout(async () => {
      console.log("set time out called");
      try {
        let userFinal = jwt.verify(token, process.env.JWT_SECRET);

        const activeUser = await User.findOne({
          userName: userFinal.userName,
        }).lean();

        console.log(activeUser);

        if (!activeUser) {
          console.log("Error occurred in the setTimeout");
        }

        let isForgotPasswords = activeUser.isForgotPasswords;
        console.log(isForgotPasswords, "boolean check");

        if (isForgotPasswords) {
          const response = await User.updateOne(
            { _id: id },
            {
              $set: {
                password: tempPasswordDidNotChangeHashed,
              },
            }
          );

          let emailBody =
            "Temporary password has been revoked. If you could not reset the password, please try again in the forgot password portal";

          let RevokeEvent = {
            email: email,
            subject: "Temporary Password Revoked | Old Antonian Cricket Wing",
            emailBody: emailBody,
          };

          let mailResult = await sendEmail(RevokeEvent);

          console.log(mailResult);
        }
      } catch (error) {
        console.log(error.message);
      }
    }, 43200000);

  } catch (error) {
    let messageInfo = "";

    if (error.message === "%email%error%") {
      messageInfo = "Error Occurred while Sending the email";
    } else {
      if (error.message === "%cannot find user%") {
        messageInfo = "Error Occurred while Finding the user";
      } else {
        messageInfo = "Error details in the error message. Log 'errorMessage'";
      }
    }

    res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: messageInfo,
    });
  }
});

router.post("/change_password", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    let user = jwt.verify(token, process.env.JWT_SECRET);
    const id = user.id;

    if (!newPassword || typeof newPassword !== "string") {
      return res.status(400).json({
        status: "error",
        error: "Invalid request / password is empty",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        status: "error",
        error: "Password should be at least 8 characters",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const response = await User.updateOne(
      { _id: id },
      {
        $set: {
          password: hashedPassword,
          isTempPassword: false,
          isForgotPasswords: false,
        },
      }
    );

    res.status(200).json({
      status: "200 OK",
      response: response,
      message: "Password changed Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: err,
      errorMessage: err.message,
      message: "Signature does not match the payload",
    });
  }
});

module.exports = router;