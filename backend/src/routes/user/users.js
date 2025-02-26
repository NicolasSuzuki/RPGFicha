const express = require('express');
const router = express.Router();
const db = require('../../db'); // Import the database connection

// GET /api/users
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await db.executeQuery('SELECT * FROM user');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [rows, fields] = await db.executeQuery('SELECT username, email, is_master FROM user WHERE user_id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add more routes as needed

module.exports = router;
