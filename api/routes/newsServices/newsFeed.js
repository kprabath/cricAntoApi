require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./postUploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date.toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    (file.mimetype === "image/png",
    file.mimetype === "image/jpeg",
    file.mimetype === "image/gif",
    file.mimetype === "image/jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limit: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: fileFilter,
});

const Post = require("../../models/tournament/Fixtures");

router.get("/view_all", async (req, res) => {
  try {
    const Post = await Post.find();
    res.status(200).json({
      status: "202 OK",
      message: "All Post information is available here",
      result: Post,
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

router.get("/view_one", async (req, res) => {
  const { post_id } = req.body;
  try {
    const Post = await Post.findOne({
      post_id: post_id,
    }).lean();

    res.status(200).json({
      status: "202 OK",
      message: `${post_id} Post information is available here`,
      result: Post,
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

router.post("/", upload.single("postUpload"), async (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    userName: req.user.username,
    postTitle: req.body.postTitle,
    postContent: req.body.postContent,
    status: req.body.status,
    images: req.file.path,
    post_id: uuidv1(),
  });

  try {
    const result = await post.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      post_id: post.post_id,
      image_URL: imageURL,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the Post",
    };
    res.json(response);
  }
});

module.exports = router;
