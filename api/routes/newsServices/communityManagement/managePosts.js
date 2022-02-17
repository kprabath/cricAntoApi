require("dotenv").config();
const express = require("express");
const router = express.Router();

const Post = require("../../../models/news/NewPost");

router.post("/approve", async (req, res) => {
  const { post_id } = req.body;

  const post = await Post.findOne({
    post_id: post_id,
  }).lean();

  if (!post) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "post not found",
    });
  }

  const id = post._id;

  try {
    const updateStatus = await Post.updateOne(
      { _id: id },
      {
        $set: { status: "APPROVED" },
      }
    );

    res.status(200).json({
      status: "202 OK",
      message: "Post status has been updated successfully",
      result: updateStatus,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Post list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/reject", async (req, res) => {
  const { post_id } = req.body;

  const post = await Post.findOne({
    post_id: post_id,
  }).lean();

  if (!post) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "post not found",
    });
  }

  const id = post._id;

  try {
    const updateStatus = await Post.updateOne(
      { _id: id },
      {
        $set: { status: "REJECTED" },
      }
    );

    res.status(200).json({
      status: "202 OK",
      message: "Post status has been updated successfully",
      result: updateStatus,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the Post list",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
