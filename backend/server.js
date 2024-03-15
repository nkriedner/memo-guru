// Require npm modules for the project
const express = require("express");

// Create the app / server
const app = express();

// Create the routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to MEMO-GURU!" });
});

// Start the app to listen on port 4000
app.listen(4000, () => {
    console.log("Server listening on port 4000!");
});
