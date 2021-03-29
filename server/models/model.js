const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    // placeholder for now
    name: {
        type: String,
        required: [true, "Item name is required."]
    }

}, { timestamps: true });

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;