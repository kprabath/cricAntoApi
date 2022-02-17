require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const Donations = require("../../models/donations/Donations");

router.get("/view_all", async (req, res) => {
  try {
    const donations = await Donations.find();
    res.status(200).json({
      status: "202 OK",
      message: "All Donations information is available here",
      result: donations,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Donations list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.get("/view_one", async (req, res) => {
  const { donation_id } = req.body;
  try {
    const donation = await Donations.findOne({
      donation_id: donation_id,
    }).lean();

    res.status(200).json({
      status: "202 OK",
      message: `${donation_id} Donation information is available here`,
      result: donation,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Donation list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const donation = new Donations({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.userName,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    membershipStatus: req.body.membershipStatus,
    description: req.body.description,
    donation_id: uuidv1(),
  });

  try {
    const result = await donation.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      donation_id: donation.donation_id,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the donation",
    };
    res.json(response);
  }
});

router.get("/view_by_user", async (req, res) => {
  const { userName } = req.body;

  try {
    const donation = await Donations.findOne({
      userName: userName,
    }).lean();

    res.status(202).json({
      status: "202 OK",
      message: "User Donation Information",
      result: donation,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the information",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
