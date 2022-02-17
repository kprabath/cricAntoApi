require("dotenv").config();
const express = require("express");
const router = express.Router();

const User = require("../../../models/user/Register");

router.post("/", async (req, res) => {
  const { userName } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "User not found",
    });
  }

  const id = user._id;

  try {
    const updateStatus = await User.updateOne(
      { _id: id },
      {
        $set: { membershipStatus: "MEMBER" },
      }
    );

    res.status(200).json({
      status: "202 OK",
      message: "Member status has been updated successfully",
      result: updateStatus,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Member list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/subscribe", async (req, res) => {
  const { userName } = req.body;

  const user = await User.findOne({
    userName: userName,
  }).lean();

  if (!user) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "User not found",
    });
  }

  const id = user._id;

  try {
    const updateStatus = await User.updateOne(
      { _id: id },
      {
        $set: { membershipStatus: "SUBSCRIBER" },
      }
    );

    res.status(200).json({
      status: "202 OK",
      message: "User status has been updated successfully",
      result: updateStatus,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the User list",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
