const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../../common_functions/mailSender");
require("dotenv").config();

const User = require("../../models/user/Register");

const characters = "1234567890";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

router.post("/", async (req, res) => {
  const userName = req.body.userName;
  const pwd = req.body.password;

  if (!userName || typeof userName !== "string") {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid user name" });
  }

  if (!pwd || typeof pwd !== "string") {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid user name" });
  }

  if (pwd.length < 8) {
    return res.status(400).json({
      status: "error",
      error: "Password should be at least 8 characters",
    });
  }

  const hashedPassword = await bcrypt.hash(pwd, 10);

  let nameOfTheUser = "";

  if (!req.body.name) {
    nameOfTheUser = req.body.firstName + " " + req.body.lastName;
  } else {
    nameOfTheUser = req.body.name;
  }

  let userType = req.body.userType;

  if (userType === "players" || userType === "Players") {
    userType = "PLAYER";
  } else {
    if (
      userType === "normal user" ||
      userType === "Normal User" ||
      userType === ""
    ) {
      userType = "NORMAL";
    } else {
      if (userType === "scorers" || userType === "Scorers") {
        userType = "SCORER";
      } else {
        if (userType === "administrators" || userType === "Administrators") {
          userType = "ADMIN";
        } else {
          if (userType === "sellers" || userType === "Sellers") {
            userType = "SELLER";
          } else {
            if (userType === "shop admin" || userType === "Shop Admin") {
              userType = "SHOP ADMIN";
            }
          }
        }
      }
    }
  }

  const verificationCode = generateString(6);

  let accountStatus = req.body.accountStatus;

  if (accountStatus === "" || accountStatus === "inactive") {
    accountStatus = "INACTIVE";
  } else if (accountStatus === "active" || accountStatus === "Active") {
    accountStatus = "ACTIVE";
  } else if (accountStatus === "locked" || accountStatus === "Locked") {
    accountStatus = "LOCKED";
  }

  const hashedVerificationCode = await bcrypt.hash(verificationCode, 10);

  const register = new User({
    userName: req.body.userName,
    password: hashedPassword,
    name: nameOfTheUser,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    isTempPassword: false,
    userType: userType,
    isOnlyDevice: true,
    isVerified: false,
    verificationCode: hashedVerificationCode,
    accountStatus: "INACTIVE",
    warningCount: 0,
    isForgotPasswords: false,
  });

  try {
    const result = await register.save();

    let emailBody = `The verification code is ${verificationCode} `;

    let event = {
      email: register.email,
      subject: "Verification Code | Old Antonian Cricket Wing",
      emailBody: emailBody,
    };

  let mailResult = await sendEmail(event);

  res.status(201).json({
    status: "200 OK",
    message: "User created Successfully",
    result: {
      userName: result.userName,
      name: result.name,
      Status: result.AccountStatus,
      email: result.email,
      address: result.address,
      phoneNumber: result.phoneNumber,
      isVerified: result.isVerified,
    },
    sendingMailResponse: mailResult,
  });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: err,
        errorMessage: err.message,
        message: "User Name Duplication Error",
      });
    }
    return res.status(204).json({
      error: err,
      errorMessage: err.message,
      message: "Error while creating the user",
    });
  }
});

router.post("/verify", async (req, res) => {
  const { userName, verificationCode } = req.body;

  const userFromDb = await User.findOne({
    userName: userName,
  }).lean();

  try {
    if (!userFromDb) {
      return res.status(404).json({
        error: err,
        errorMessage: err.message,
        message: "username / password is not valid",
      });
    }
    if (await bcrypt.compare(verificationCode, userFromDb.verificationCode)) {
      const responseUpdate = await User.updateOne(
        { _id: userFromDb._id },
        {
          $set: { isVerified: true },
        }
      );

      res.status(200).json({
        status: "200 OK",
        response: responseUpdate,
        message: "user Information Successfully Verified",
      });
    }
  } catch (error) {
    res.status(404).json({
      error: "Error",
      errorMessage: error.message,
      message: "verification failed",
    });
  }
});

module.exports = router;
