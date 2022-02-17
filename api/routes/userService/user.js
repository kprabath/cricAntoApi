const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

const User = require("../../models/user/Register");

router.get("/view_all", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "202 OK",
      message: "User updated successfully",
      result: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the user list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/update/mobile_number", async (req, res) => {
  const { userName, updatedPhoneNumber } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "user not found",
    });
  }

  const id = user._id;

  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: { phoneNumber: updatedPhoneNumber },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "User updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "User Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/update/address", async (req, res) => {
  const { userName, updatedAddress } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "user not found",
    });
  }

  const id = user._id;

  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: { address: updatedAddress },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "User updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "User Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/update/email", async (req, res) => {
  const { userName, updatedEmail } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "user not found",
    });
  }

  const id = user._id;

  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: { email: updatedEmail },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "User updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "User Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/update/status", async (req, res) => {
  const { userName, updatedStatus } = req.body;
  const id = req.body._id;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  const sanitizedStatus = updatedStatus.Uppercase();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "user not found",
    });
  }

  let emailBody = `Your account has been ${sanitizedStatus}. Please follow to your account`;

  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: { accountStatus: sanitizedStatus },
      }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: email,
      subject: "Status Update",
      text: emailBody,
    };

    transporter.sendMail(mailOptions);

    res.status(202).json({
      status: "202 OK",
      message: "User updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "User Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/warn", async (req, res) => {
  const { userName } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "user not found",
    });
  }

  const id = user._id;

  const warnings = user.warningCount + 1;

  let emailBody = `We have found some in accuracies with your account. Please refrain from illegal actions`;

  try {
    const response = await User.updateOne(
      { _id: id },
      {
        $set: { warningCount: warnings },
      }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: email,
      subject:
        "Temporary Password for the Old Antonian Cricket Wing Application",
      text: emailBody,
    };

    transporter.sendMail(mailOptions);

    res.status(200).json({
      status: "202 OK",
      message: "Warning sent successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "User Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
