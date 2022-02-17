require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const Notice = require("../../models/news/Notice");

router.get("/view_all", async (req, res) => {
  try {
    const notice = await Notice.find();
    res.status(200).json({
      status: "202 OK",
      message: "All notice information is available here",
      result: notice,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the notice list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.get("/view_one", async (req, res) => {
  const { notice_id } = req.body;
  try {
    const notice = await Notice.findOne({
      notice_id: notice_id,
    }).lean();

    res.status(200).json({
      status: "202 OK",
      message: `${notice_id} Notice information is available here`,
      result: notice,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Error while getting the notice list",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const notice = new Notice({
    _id: new mongoose.Types.ObjectId(),
    creatorName: req.body.creatorName,
    content: req.body.content,
    images: req.body.images,
    notice_id: uuidv1(),
  });

  try {
    const result = await notice.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      notice_id: notice.notice_id,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the tournament",
    };
    res.json(response);
  }
});

router.post("/published", async (req, res) => {
  const { notice_id } = req.body;

  const notice = await Notice.findOne({
    notice_id: notice_id,
  }).lean();

  if (!notice) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "notice not found",
    });
  }

  const id = notice._id;

  try {
    const response = await Notice.updateOne(
      { _id: id },
      {
        $set: { status: "PUBLISHED" },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "Notice updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Notice Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

router.post("/unpublish", async (req, res) => {
  const { notice_id } = req.body;

  const notice = await Notice.findOne({
    notice_id: notice_id,
  }).lean();

  if (!notice) {
    return res.status(404).json({
      status: "error",
      error: error,
      errorMessage: error.message,
      message: "Notice not found",
    });
  }

  const id = notice._id;

  try {
    const response = await Notice.updateOne(
      { _id: id },
      {
        $set: {
          status: "UNPUBLISHED",
        },
      }
    );

    res.status(202).json({
      status: "202 OK",
      message: "Notice updated successfully",
      result: response,
    });
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Notice Updating Error",
      error: error,
      errorMessage: error.message,
    });
  }
});

module.exports = router;
