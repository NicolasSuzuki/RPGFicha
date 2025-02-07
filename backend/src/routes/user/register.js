// src/routes/register.js

const express = require('express');
const router = express.Router();
const db = require('../../db');
const bcrypt = require('bcrypt');

// POST /api/register
router.post('/', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if the username is already taken
        const existingUser = await db.findUserByUsername(username);

        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Username is already taken' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const query = 'INSERT INTO user (username, password_hash, email) VALUES (?, ?, ?)';
        const params = [username, hashedPassword, email];

        await db.executeQuery(query, params);

        res.json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
