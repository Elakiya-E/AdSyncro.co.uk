const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
    hero: {
        title: String,
        description: String
    },
    pricingPlans: [{
        name: String,
        subtitle: String,
        icon: String,
        description: String,
        monthlyPrice: String,
        annualPrice: String,
        color: String,
        popular: { type: Boolean, default: false },
        features: [String],
        bestFor: [String],
        cta: String
    }],
    faqs: [{
        question: String,
        answer: String
    }],
    seo: {
        title: String,
        description: String
    },
    status: { type: String, enum: ['draft', 'published'], default: 'published' }
}, { timestamps: true });

module.exports = mongoose.model('Pricing', PricingSchema);
