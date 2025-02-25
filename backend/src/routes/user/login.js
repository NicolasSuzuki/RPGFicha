const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../../db');

// POST /api/login
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.findUserByEmail(email);

        if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await db.comparePasswords(password, user[0].password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Return the token
        const token = jwt.sign({ userId: user[0].id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
