// src/routes/get-character.js

const express = require('express');
const router = express.Router();
const db = require('../../db');

// GET /api/get-character/:userID
router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    try {
        // Get the user's character from the database
        const character = await db.getCharacterByUserID(userID);

        if (!character) {
            return res.status(404).json({ error: 'Character not found for this user' });
        }

        // Calculate the modifier for each skill
        const skillsWithModifiers = {
            FORCA: `${character.strength}/${calculateModifier(character.strength)}`,
            PRECISAO: `${character.accuracy}/${calculateModifier(character.accuracy)}`,
            AGILIDADE: `${character.agility}/${calculateModifier(character.agility)}`,
            VIGOR: `${character.vigor}/${calculateModifier(character.vigor)}`,
            INTELIGENCIA: `${character.intelligence}/${calculateModifier(character.intelligence)}`,
            SABEDORIA: `${character.wisdom}/${calculateModifier(character.wisdom)}`,
            CARISMA: `${character.charisma}/${calculateModifier(character.charisma)}`,
        };

        res.json({
            character,
            skillsWithModifiers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Helper function to calculate the modifier
const calculateModifier = (value) => {
    return Math.floor(value / 5) - 1;
};

module.exports = router;
