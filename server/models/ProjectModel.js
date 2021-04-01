const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Projects need a Title"],
    },
    languages: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    owner: {
        type: String,
    },
    ownerId: {
        type: String,
    }
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;