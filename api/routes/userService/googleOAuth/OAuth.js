const express = require("express");
require("dotenv").config();
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

const User = require("../../../models/user/Register");

router.post("/", async (req, res) => {
  let token = req.body.token;

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();

    let obj = {
      userName: payload.userName,
      name: payload.name,
      picture: payload.picture,
    };

    if (!obj.userName || typeof obj.userName !== "string") {
      return res
        .status(400)
        .json({ status: "error", error: "Invalid user name" });
    }

    const result = await register.save();
    res.status(201).json({
      status: "201 OK",
      message: "User created Successfully",
      result: result,
    });
  }

  try {
    verify();
    return res.status(200).json({
      status: "200 OK",
      token: token,
      message: "User Information Successfully Validated",
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
      errorMessage: err.message,
      message: "error occurred while verifying",
    });
  }
});

module.exports = router;
