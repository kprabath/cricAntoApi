require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = require("../../models/news/NewPost");
const Reactions = require("../../models/news/Reactions");
const Comments = require("../../models/news/Comments");

router.post("/react", async (req, res) => {
  const { userName, post_id } = req.body;

  const post = await Post.findOne({
    post_id: post_id,
  }).lean();

  const reaction = await Reactions.findOne({
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
  const resReactionUpdate = "";

  try {
    const reactRes = await Post.updateOne(
      { _id: id },
      {
        $set: { reactions: post.reactions + 1 },
      }
    );

    if (reaction != null) {
      resReactionUpdate = await Reactions.updateOne(
        { _id: id },
        {
          $push: {
            usrName: userName,
            reactions: post,
          },
        }
      );
    } else {
      const react = new Reactions({
        _id: new mongoose.Types.ObjectId(),
        userName: userName,
        reactions: post.reactions + 1,
        post_id: post_id,
      });

      resReactionUpdate = await react.save();
    }

    let response = {
      status: "200 OK",
      message: "Updated Successfully",
      result: [reactRes, resReactionUpdate],
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the Reaction",
    };
    res.json(response);
  }
});

router.post("/comment", async (req, res) => {
  const { userName, post_id, comment } = req.body;

  const post = await Post.findOne({
    post_id: post_id,
  }).lean();

  const comments = await Comments.findOne({
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

  const resReactionUpdate = "";

  try {
    if (comments != null) {
      resReactionUpdate = await Comments.updateOne(
        { _id: comments._id },
        {
          $push: {
            usrName: userName,
            comment: comment,
          },
        }
      );
    } else {
      const react = new Comments({
        _id: new mongoose.Types.ObjectId(),
        userName: userName,
        comment: comment,
        post_id: post_id,
      });

      resReactionUpdate = await react.save();
    }

    let response = {
      status: "200 OK",
      message: "Updated Successfully",
      result: [reactRes, resReactionUpdate],
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the Reaction",
    };
    res.json(response);
  }
});

module.exports = router;
