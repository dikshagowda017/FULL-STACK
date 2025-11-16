// Import express
const express = require("express");

// Create an Express app
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
