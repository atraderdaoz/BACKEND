const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve audio files
app.use("/audio", express.static(path.join(__dirname, "public/audio")));

// Health check
app.get("/", (req, res) => {
  res.send("RUN.AI Radio Backend Live 🚀");
});

// 🔥 CUSTOM STATION (YOUR FILE)
app.get("/station/custom/stream", (req, res) => {
  res.json({
    audio: process.env.BASE_URL + "/audio/DSF1000.mp3",
    station: "custom"
  });
});

// Demo stations
app.get("/station/:name/stream", (req, res) => {
  const station = req.params.name;

  res.json({
    audio: "https://backend-production-ed9e.up.railway.app/audio/DFS1000.mp3",
    station
  });
});

// Start server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
