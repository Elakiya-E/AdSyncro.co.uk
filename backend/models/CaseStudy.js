const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema({
    title: { type: String, required: true },
    client: { type: String },
    industry: { type: String },
    challenge: { type: String },
    solution: [String],
    results: [String],
    testimonial: {
        quote: String,
        author: String,
        position: String
    },
    image: { type: String },
    slug: { type: String, unique: true, required: true },
    seo: {
        title: String,
        description: String
    },
    status: { type: String, enum: ['draft', 'published'], default: 'published' }
}, { timestamps: true });

module.exports = mongoose.model('CaseStudy', CaseStudySchema);
