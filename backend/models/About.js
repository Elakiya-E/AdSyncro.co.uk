const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    hero: {
        title: String,
        description: String,
        image: String
    },
    whyExists: {
        title: String,
        descriptionLines: [String]
    },
    focusAreas: [String],
    differentiators: [{
        title: String,
        description: String,
        icon: String
    }],
    philosophy: [{
        title: String,
        desc: String
    }],
    partners: [{
        name: String,
        img: String
    }],
    cta: {
        title: String,
        description: String,
        buttonText: String
    },
    seo: {
        title: String,
        description: String,
        keywords: [String]
    }
}, { timestamps: true });

// Ensure only one about document exists or handle it as a single entry
module.exports = mongoose.model('About', AboutSchema);
