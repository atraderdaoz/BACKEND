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
    audio: "https://backend-production-ed9e.up.railway.app/audio/recording90.mp3",
    station: "custom"
  });
});

// Demo stations
app.get("/station/custom/stream", (req, res) => {
  res.json({
    audio: "https://backend-production-ed9e.up.railway.app/audio/recording90.mp3",
    station: "custom"
  });
});

// Start server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
