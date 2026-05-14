const db = require('../db');

exports.getPricing = async (req, res) => {
    try {
        const pricing = await db.findOne('pricing');
        res.json(pricing || {});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePricing = async (req, res) => {
    try {
        const updated = await db.update('pricing', req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
