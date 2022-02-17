const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "testIndex.html"));
});

// Requiring Routes
const liveMatchRoutes = require("./routes/liveMatch");

app.use("/livematch", liveMatchRoutes);

server.listen(PORT, () => {
  console.log(`Socket Running at http://localhost:${PORT}/`);
});
