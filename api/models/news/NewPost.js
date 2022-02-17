const mongoose = require("mongoose");

const newPostScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: "string",
    required: true,
  },
  postTitle: {
    type: "string",
    required: true,
  },
  postContent: {
    type: "string",
    required: true,
  },
  reactions: {
    type: Number,
    required: false,
    default: 0,
  },
  status: {
    type: "string",
    required: false,
    default: "PENDING",
  },
  images: {
    type: "string",
    required: false,
  },
  post_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Post", newPostScheme);
