const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Removed MongoDB connection in favor of local JSON storage
console.log('Using Local JSON Storage...');

// Routes (to be added)
const aboutRoutes = require('./routes/about');
const solutionRoutes = require('./routes/solutions');
const serviceRoutes = require('./routes/services');
const caseStudyRoutes = require('./routes/caseStudies');
const pricingRoutes = require('./routes/pricing');
const blogRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');

app.use('/api/about', aboutRoutes);
app.use('/api/solutions', solutionRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('AdSyncro API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
