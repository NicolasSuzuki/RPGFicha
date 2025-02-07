// src/routes/level-up.js

const express = require('express');
const router = express.Router();
const db = require('../../db');

// POST /api/level-up
router.post('/', async (req, res) => {
    try {
        // Get all players from the database
        const allPlayers = await db.getAllPlayers(); // Implement this method in db.js

        // Level up each player and grant 8 skill points
        const levelUpPromises = allPlayers.map(async (player) => {
            const { userID, characterID, level, skillPoints } = player;

            // Update the level and skill points for each player
            const newLevel = level + 1;
            const newSkillPoints = skillPoints + 8;

            await db.updatePlayerLevelAndSkillPoints(userID, characterID, newLevel, newSkillPoints); // Implement this method in db.js
        });

        // Wait for all level-up operations to complete
        await Promise.all(levelUpPromises);

        res.json({ message: 'Level up successful for all players' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
