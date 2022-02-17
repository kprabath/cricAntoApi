require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const Tournament = require("../../models/tournament/Tournament");

router.get("/view_all", async (req, res) => {
  try {
    const tournament = await Tournament.find();
    res.status(200).json({
      status: "202 OK",
      message: "All Tournament information is available here",
      result: tournament,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the tournament list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.get("/view_one", async (req, res) => {
  const { tournament_id } = req.body;
  try {
    const tournament = await Tournament.findOne({
      tournament_id: tournament_id,
    }).lean();

    res.status(200).json({
      status: "202 OK",
      message: `${tournament_id} Tournament information is available here`,
      result: tournament,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the tournament list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const tournament = new Tournament({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.item_name,
    status: req.body.status,
    format: req.body.format,
    age_group: req.body.age_group,
    type: req.body.type,
    description: req.body.description,
    tournament_id: uuidv1(),
  });

  try {
    const result = await tournament.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      tournament_id: tournament.tournament_id,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the tournament",
    };
    res.json(response);
  }
});

router.post("/end", async (req, res) => {
  const { tournament_id } = req.body;

  const tournament = await Tournament.findOne({
    tournament_id: tournament_id,
  }).lean();

  if (!tournament) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "tournament not found",
    });
  }

  const id = tournament._id;

  try {
    const response = await Tournament.updateOne(
      { _id: id },
      {
        $set: { status: "COMPLETED" },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "Tournament updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Tournament Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/edit", async (req, res) => {
  const {
    tournament_id,
    updatedName,
    updatedFormat,
    updatedType,
    updatedAgeGroup,
    updatedDescription,
  } = req.body;

  const tournament = await Tournament.findOne({
    tournament_id: tournament_id,
  }).lean();

  if (!tournament) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "Tournament not found",
    });
  }

  const id = Tournament._id;

  try {
    const response = await Tournament.updateOne(
      { _id: id },
      {
        $set: {
          name: updatedName,
          format: updatedFormat,
          type: updatedType,
          age_group: updatedAgeGroup,
          description: updatedDescription,
        },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "Tournament updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Tournament Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
