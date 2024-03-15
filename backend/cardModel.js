// Require mongoose module to simplify communication with mongoDB
const mongoose = require("mongoose");

// Initialize the use of mongoose Schemas
const Schema = mongoose.Schema;

// Create a new model schema for the cards
const cardSchmea = new Schema(
    {
        content_1: {
            type: String,
            required: true,
        },
        content_2: {
            type: String,
            required: true,
        },
        memo_level: {
            type: Number,
            default: 1,
        },
        user_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Export the card model
module.exports = mongoose.model("Card", cardSchmea);
