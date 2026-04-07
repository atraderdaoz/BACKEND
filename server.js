const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("RUN.AI Radio Backend Live");
});

// Example station endpoint
app.get("/station/:name/stream", (req, res) => {
  const station = req.params.name;

  // Demo audio (replace with your AI system later)
  res.json({
    audio: "public/audio/DSF1000.mp3",
    station
  });
});

// 🔥 CRITICAL FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
