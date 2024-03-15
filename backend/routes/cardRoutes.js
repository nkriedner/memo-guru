// Require express module for creating an express router
const express = require("express");
// Import cardController functions
const { getCards, getCard, createCard, deleteCard, updateCard } = require("../controllers/cardController");

// Create the router
const router = express.Router();

// ROUTES
router.get("/", getCards); // GET all cards
router.get("/:id", getCard); // GET a single card
router.post("/", createCard); // POST a new card
router.delete("/:id", deleteCard); // DELETE a card
router.patch("/:id", updateCard); // UPDATE a card

// Export the router
module.exports = router;
