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
        default: "",
        maxLength: [150, "Description must be less than 75 characters"]
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