// Require npm modules for the project
require("dotenv").config(); // to use environment variables
const express = require("express");
const mongoose = require("mongoose"); // ODM package for MongoDB

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

// Connect to database & start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // Start the app to listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to database & listening on port ${process.env.PORT}!`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
