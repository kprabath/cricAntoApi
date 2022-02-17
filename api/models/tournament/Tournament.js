const mongoose = require("mongoose");

const tournamentScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: "string",
    required: true,
  },
  status: {
    type: "string",
    required: true,
    default: 'STARTED'
  },
  format: {
    type: "string",
    required: true,
  },
  age_group: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  tournament_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Tournament", tournamentScheme);
