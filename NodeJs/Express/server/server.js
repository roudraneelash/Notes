const express = require("express");
const server = express();
const path = require("path");
const PORT = 8080;

server.get("/", (req, res) => {
  res.end("Welcome to Express learning");
});

// Serve static files from the "public" directory
server.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
