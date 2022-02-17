const cv = require("opencv4nodejs");
const express = require("express");
const router = express.Router();
const io = require("socket.io");
const fs = require("fs");

const videoCamID = "ID of the video camera";
const FPS = 30;

// replace below 0 with the ID
const videoCaptureDevice = new cv.VideoCapture(0);
videoCaptureDevice.set(cv.CAP_PROP_FRAME_WIDTH, 400);
videoCaptureDevice.set(cv.CAP_PROP_FRAME_HEIGHT, 400);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "testIndex.html"));
});

setInterval(() => {
  const frame = videoCaptureDevice.read();
  let video = cv.imencode(".mp4", frame).toString("base64");
  io.emit("stream", video);
}, 1000 / FPS);