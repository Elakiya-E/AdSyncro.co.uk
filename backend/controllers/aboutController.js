const db = require('../db');

const getAbout = async (req, res) => {
    try {
        const about = await db.findOne('about');
        if (!about || Object.keys(about).length === 0) {
            return res.json({
                hero: {
                    title: "Built for Intelligent, Scalable Growth",
                    description: "AdSyncro is an AI powered growth automation platform designed to help businesses grow with precision, efficiency, and confidence.",
                    image: "https://images.unsplash.com/photo-1683770997177-0603bd44d070"
                },
                whyExists: {
                    title: "Why AdSyncro Exists",
                    descriptionLines: [
                        "Growth today is complex. Businesses face rising acquisition costs, fragmented data, compliance pressures, and limited operational bandwidth.",
                        "AdSyncro was built to solve this.",
                        "We combine automation, AI optimization, and sector expertise to create growth systems that are measurable, compliant, and designed for long term performance."
                    ]
                },
                focusAreas: [
                    'AI powered growth automation',
                    'Retrofit & energy demand systems',
                    'Compliance ready growth frameworks',
                    'Scalable digital growth for SMEs'
                ]
            });
        }
        res.json(about);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAbout = async (req, res) => {
    try {
        const updated = await db.update('about', req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAbout, updateAbout };
