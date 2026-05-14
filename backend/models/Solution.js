const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    icon: { type: String },
    image: { type: String },
    capabilities: [String],
    businessValue: [String],
    color: { type: String },
    slug: { type: String, unique: true },
    seo: {
        title: String,
        description: String
    },
    status: { type: String, enum: ['draft', 'published'], default: 'published' }
}, { timestamps: true });

module.exports = mongoose.model('Solution', SolutionSchema);
