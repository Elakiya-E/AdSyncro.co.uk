const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Bypassing login check for: ${username}`);

    // TEMPORARILY ALLOW ALL LOGINS
    const token = jwt.sign({ username: username || 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({ success: true, token });
});

module.exports = router;
