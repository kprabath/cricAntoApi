const mongoose = require("mongoose");

const reactionPostScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: "string",
    value: ["string"],
    required: true,
  },
  reactions: {
    type: Number,
    required: false,
    default: 0,
  },
  post_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Reactions", reactionPostScheme);
