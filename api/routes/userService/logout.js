const express = require("express");
const router = express.Router();

const User = require("../../models/user/Register");

router.post("/", async (req, res) => {
  const { userName } = req.body;

  const userFromDb = await User.findOne({
    userName: userName,
  }).lean();

  const id = userFromDb._id;

  try {
    const responseUpdate = await User.updateOne(
      { _id: id },
      {
        $set: { isOnlyDevice: true },
      }
    );

    res.status(200).json({
      response: responseUpdate,
      message: "logged out successfully",
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
      message: "Error Occured while logging out",
    });
  }
});

module.exports = router;