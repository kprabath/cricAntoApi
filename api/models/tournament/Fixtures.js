const mongoose = require("mongoose");

const fixtureScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tournamentName: {
    type: "string",
    required: true,
  },
  status: {
    type: "string",
    required: true,
    default: "Upcoming",
  },
  format: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  age_group: {
    type: "string",
    required: true,
  },
  timeOfDay: {
    type: "string",
    required: true,
  },
  matchNumber: {
    type: Number,
    required: true,
  },
  matchName: {
    type: "string",
    required: true,
  },
  venue: {
    type: "string",
    required: true,
  },
  startingDate: {
    type: Date,
    required: true,
  },
  endingDate: {
    type: Date,
    required: true,
  },
  startingTime: {
    type: "string",
    required: true,
  },
  fixture_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Fixture", fixtureScheme);
