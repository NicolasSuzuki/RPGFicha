// src/routes/get-character.js

const express = require('express');
const router = express.Router();
const db = require('../../db');
const { verifyToken } = require('../../services/token');

// GET /api/get-character/:userID
router.get('/', async (req, res) => {
    const resp = await verifyToken({ token: req.get('Authorization').split(' ')[1] });
    if (!resp.valid || !resp.user.is_master) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        // Get all characters from the database
        const characters = await db.getAllCharacters();
        const charactersWithSkills = characters.map(character => ({ ...character, skills: {
                FORCA: `${character.strength}/${calculateModifier(character.strength)}`,
                PRECISAO: `${character.accuracy}/${calculateModifier(character.accuracy)}`,
                AGILIDADE: `${character.agility}/${calculateModifier(character.agility)}`,
                VIGOR: `${character.vigor}/${calculateModifier(character.vigor)}`,
                INTELIGENCIA: `${character.intelligence}/${calculateModifier(character.intelligence)}`,
                SABEDORIA: `${character.wisdom}/${calculateModifier(character.wisdom)}`,
                CARISMA: `${character.charisma}/${calculateModifier(character.charisma)}`,
            }
        }));
        res.json(charactersWithSkills);
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
