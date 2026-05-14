const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String },
    image: { type: String },
    slug: { type: String, unique: true, required: true },
    seo: {
        title: String,
        description: String,
        keywords: [String]
    },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
    author: { type: String },
    category: { type: String },
    tags: [String],
    readTime: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
