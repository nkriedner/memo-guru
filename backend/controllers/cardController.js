const Card = require("../models/cardModel"); // Imports the card model
const mongoose = require("mongoose"); // ODM package for MongoDB

// Get all cards
const getCards = async (req, res) => {
    // retreive ALL cards and sort them in descending order
    const cards = await Card.find({}).sort({ createdAt: -1 });

    res.status(200).json(cards);
};

// Get a single card
const getCard = async (req, res) => {
    // get id from the request params
    const { id } = req.params;

    // check if id has a valid format (not)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "The id for the card is not a valid id for mongoDB" });
    }

    // retreive a single card via its id
    const card = await Card.findById(id);

    // check if the card exists (not)
    if (!card) {
        return res.status(404).json({ error: "Cannot find a card with this ID" });
    }

    // if card exists
    res.status(200).json(card);
};

// Create new card
const createCard = async (req, res) => {
    // retreive data for new card from request body
    const { content_1, content_2, memo_level } = req.body;

    try {
        // create a new card (add document to db)
        const card = await Card.create({ content_1, content_2, memo_level });
        res.status(200).json(card);
    } catch (error) {
        // if card creation fails
        res.status(400).json({ error: error.message });
    }
};

// Delete a card
const deleteCard = async (req, res) => {
    // get id from the request params
    const { id } = req.params;

    // check if id has a valid format (not)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "The id for the card is not a valid id for mongoDB" });
    }

    const card = await Card.findOneAndDelete({ _id: id });

    // check if the card exists (not)
    if (!card) {
        return res.status(404).json({ error: "Cannot find a card with this ID" });
    }

    // if card existed:
    res.status(200).json(card);
};

// Update a card
const updateCard = async (req, res) => {
    // get id from the request params
    const { id } = req.params;

    const card = await Card.findOneAndUpdate(
        { _id: id },
        {
            ...req.body, // updates the data sent in the request body
        }
    );

    // check if the card exists (not)
    if (!card) {
        return res.status(404).json({ error: "Cannot find a card with this ID" });
    }

    // if card existed:
    res.status(200).json(card);
};

module.exports = { getCards, getCard, createCard, deleteCard, updateCard };
