// src/routes/update-hp.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/update-hp
router.post('/', async (req, res) => {
    const { userID, characterID, newHP } = req.body;

    try {
        // Update the HP for the specified character
        await db.updateCharacterHP(userID, characterID, newHP); // Implement this method in db.js

        res.json({ message: 'HP update successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
