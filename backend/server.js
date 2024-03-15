// Require npm modules for the project
require("dotenv").config(); // to use environment variables
const express = require("express");

// Import routes
const cardRoutes = require("./routes/cardRoutes");

// Create the app / server
const app = express();

// MIDDLEWARE
app.use(express.json()); // lets you access the request body in json
app.use((req, res, next) => {
    // log the req method and path for every request
    console.log(`${req.method} request to "${req.path}"`);
    next();
});
// Use the imported routes
app.use("/api/cards", cardRoutes);

// Start the app to listen on port 4000
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`);
});
