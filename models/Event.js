const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: String,
    prize: String,
    submissions: Array,
    ended: Boolean,
    winner: String
});

mongoose.model("events", eventSchema);