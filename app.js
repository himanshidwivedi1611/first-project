// app.js - Educational Institution Webpage (Experiment style)
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`🚀 Himanshi's University server running at http://localhost:${PORT}`);
});
