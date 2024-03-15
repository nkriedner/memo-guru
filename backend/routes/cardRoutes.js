// Require express module for creating an express router
const express = require("express");
// Require card model
const Card = require("../models/cardModel");

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
router.post("/", async (req, res) => {
    const { content_1, content_2, memo_level } = req.body;

    try {
        // create a new card
        const card = await Card.create({ content_1, content_2, memo_level });
        res.status(200).json(card);
    } catch (error) {
        // if card creation fails
        res.status(400).json({ error: error.message });
    }
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
