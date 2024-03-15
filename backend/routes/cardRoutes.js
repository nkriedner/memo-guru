// Require express module
const express = require("express");

// Create the router
const router = express.Router();

// ROUTES
// GET all cards
router.get("/", (req, res) => {
    res.json({ message: "GET all cards" });
});
// GET a single card
router.get("/:id", (req, res) => {
    res.json({ message: "GET a single card" });
});
// POST a new card
router.post("/", (req, res) => {
    res.json({ message: "POST a new card" });
});
// DELETE a card
router.delete("/:id", (req, res) => {
    res.json({ message: "DELETE a card" });
});
// UPDATE a card
router.patch("/:id", (req, res) => {
    res.json({ message: "UPDATE a card" });
});

// Export the router
module.exports = router;
