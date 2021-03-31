const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Projects need a Title"],
    },
    languages: {
        type: String
    },
    desc: {
        type: String,
    },
    thumbnail: {}
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;