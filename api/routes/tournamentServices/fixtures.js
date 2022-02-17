require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const Fixture = require("../../models/tournament/Fixtures");

router.get("/view_all", async (req, res) => {
  try {
    const fixture = await Fixture.find();
    res.status(200).json({
      status: "202 OK",
      message: "All Fixture information is available here",
      result: fixture,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Fixture list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.get("/view_one", async (req, res) => {
  const { fixture_id } = req.body;
  try {
    const fixture = await Fixture.findOne({
      fixture_id: fixture_id,
    }).lean();

    res.status(200).json({
      status: "202 OK",
      message: `${fixture_id} Fixture information is available here`,
      result: fixture,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Fixture list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const fixture = new Fixture({
    _id: new mongoose.Types.ObjectId(),
    tournamentName: req.body.item_name,
    status: req.body.status,
    format: req.body.format,
    type: req.body.type,
    age_group: req.body.age_group,
    timeOfDay: req.body.timeOfDay,
    matchNumber: req.body.match_number,
    matchName: req.body.match,
    venue: req.body.venue,
    startingDate: req.body.startingDate,
    endingDate: req.body.endingDate,
    startingTime: req.body.startingTime,
    tournament_id: uuidv1(),
  });

  try {
    const result = await fixture.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      tournament_id: fixture.tournament_id,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the Fixture",
    };
    res.json(response);
  }
});

router.post("/update", async (req, res) => {
  const { tournament_id, updatedStatus } = req.body;

  const fixture = await Fixture.findOne({
    tournament_id: tournament_id,
  }).lean();

  if (!fixture) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "Fixture not found",
    });
  }

  const id = Fixture._id;

  try {
    const response = await Fixture.updateOne(
      { _id: id },
      {
        $set: {
          status: updatedStatus,
        },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "Fixture updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Fixture Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
