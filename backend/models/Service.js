const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    icon: { type: String }, // Store the name of the Lucide icon
    image: { type: String },
    designedFor: [String],
    whatWeEnable: [String],
    outcomes: [String],
    cta: { type: String },
    color: { type: String },
    slug: { type: String, unique: true },
    seo: {
        title: String,
        description: String
    },
    status: { type: String, enum: ['draft', 'published'], default: 'published' }
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);
