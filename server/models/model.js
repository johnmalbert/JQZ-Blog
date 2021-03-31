const mongoose = require ("mongoose");

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
    }
}, {timestamps: true, strict: false })

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;