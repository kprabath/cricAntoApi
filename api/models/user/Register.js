const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    picture: {
      type: "string",
      required: false,
    },
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    email: {
      required: true,
      type: "string",
    },
    address: {
      type: "string",
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
    isTempPassword: {
      type: Boolean,
      required: true,
      default: false,
    },
    userType: {
      type: "string",
      required: true,
      default: "NORMAL",
    },
    isOnlyDevice: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationCode: {
      type: String,
      required: true,
    },
    accountStatus: {
      type: String,
      required: true,
      default: "INACTIVE",
    },
    warningCount: {
      type: Number,
      required: true,
      default: 0,
    },
    isForgotPasswords: {
      type: Boolean,
      default: false,
    },
    membershipStatus: {
      type: "string",
      required: false,
      default: "NEW USER",
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", registerSchema);
