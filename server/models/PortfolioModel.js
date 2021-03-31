const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Owner name is required."]
    },
    linkedIn: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    facebook: {
        type: String,
        default: ""
    },
    instagram: {
        type: String,
        default: ""
    },
    youtube: {
        type: String,
        default: ""
    },
    award1: {
        type: String
    },
    award2: {
        type: String
    },
    award3: {
        type: String
    },
    bio: {
        type: String
    }
}, { timestamps: true, strict: false });

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;

/*
template for postman:
{
    "name": "JohnPortfolio",
    "linkedIn": "https://www.linkedin.com/in/john-m-albert/",
    "github": "https://www.github.com/johnmalbert",
    "facebook": "https://www.facebook.com/john.m.albert",
    "instagram": "https://www.instagram.com/chasethealberts",
    "award1": "Python Red Belt",
    "award2": "C# Full Stack Red Belt",
    "award3": "MERN Full Stack Black Belt",
    "bio": "Hi there .... lorem ... add whatever+"
}
*/ 
