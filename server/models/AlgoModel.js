const mongoose = require("mongoose");

const AlgoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Algos need a Title"],
    },
    description: {
        type: String,
        default: ""
    },
    sampleInput: {
        type: String,
        default: ""
    },
    sampleOutput: {
        type: String,
        default: ""
    },
    sampleInput2: {
        type: String,
        default: ""
    },
    sampleOutput2: {
        type: String,
        default: ""
    },
}, {timestamps: true, strict: false});

const Algo = mongoose.model("Algo", AlgoSchema);

module.exports = Algo;