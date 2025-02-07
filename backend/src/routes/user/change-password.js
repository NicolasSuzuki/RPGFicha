// src/routes/change-password.js

const express = require('express');
const router = express.Router();
const db = require('../../db');
const bcrypt = require('bcrypt');

// POST /api/change-password
router.post('/', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        // Retrieve the user's information
        const user = await db.findUserByEmail(email);

        if (user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Hash the new password before updating
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        const updateQuery = 'UPDATE users SET password_hash = ? WHERE email = ?';
        const updateParams = [hashedNewPassword, email];

        await db.executeQuery(updateQuery, updateParams);

        res.json({ message: 'Password change successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
