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
    audio: "https://aimusicfactory.ai/share?id=3063182&music_id=b77ee47c-5d98-492c-89ef-372c298efbe8",
    station
  });
});

// 🔥 CRITICAL FOR RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
