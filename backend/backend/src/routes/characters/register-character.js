// src/routes/register-character.js

const express = require('express');
const router = express.Router();
const db = require('../../db');

// POST /api/register-character
router.post('/', async (req, res) => {
    const {
        userId,
        characterName,
        level,
        position,
        quirk,
        hp,
        defenseDa,
        defenseRes,
        defenseCm,
        strength,
        accuracy,
        agility,
        vigor,
        intelligence,
        wisdom,
        charisma,
        talent,
        skillPoints        
    } = req.body;

    try {
        // Check if the character name is already taken for the user
        let existingCharacter = await db.findCharacterByName(characterName);

        if (existingCharacter.length > 0) {
            return res.status(400).json({ error: 'Character name is already taken for this user' });
        }

        // Insert the new character into the database
        const query = `
            INSERT INTO UserCharacter (user_id, name, level, position, quirk, hp, defense_da, defense_res, defense_cm,
            strength, accuracy, agility, vigor, intelligence, wisdom, charisma, talent, skillPoints)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            userId,
            characterName,
            level,
            position,
            quirk,
            hp,
            defenseDa,
            defenseRes,
            defenseCm,
            strength,
            accuracy,
            agility,
            vigor,
            intelligence,
            wisdom,
            charisma,
            talent,
            skillPoints
        ];
        console.log(params, req.body)
        await db.executeQuery(query, params);

        res.json({ message: 'Character registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
