// Import express
const express = require("express");

// Create an express app
const app = express();

// Define port
const port = 3000;

// Create a basic route
app.get("/", (req, res) => {
  res.send("SucessFully insta;lled the node  🚀");
});

app.get("/home", (req, res) => {
  res.send("dont install this 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
