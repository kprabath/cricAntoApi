const mongoose = require("mongoose");

const donationsSchema = mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    name: {
      type: "string",
      required: true,
    },
    picture: {
      type: "string",
      required: false,
    },
    email: {
      required: true,
      type: "string",
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
    membershipStatus: {
      type: "string",
      required: false,
      default: "NEW USER",
    },
    donation_id: {
      type: "string",
      required: true,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Donations", donationsSchema);
