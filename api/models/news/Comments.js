const mongoose = require("mongoose");

const reactionPostScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: "string",
    value: ["string"],
    required: true,
  },
  comment: {
    type: Number,
    required: false,
    value: ["string"],
  },
  post_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Comments", reactionPostScheme);
