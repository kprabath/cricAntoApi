const mongoose = require("mongoose");

const noticeScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  creatorName: {
    type: "string",
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  content: {
    type: "string",
    required: true,
  },
  status: {
    type: "string",
    required: false,
    default: "NEW NOTICE",
  },
  images: {
    type: "string",
    required: false,
  },
  notice_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Notice", noticeScheme);
