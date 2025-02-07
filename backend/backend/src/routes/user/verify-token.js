const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    const token = req.body.token;

    if (!token) {
        return res.json({ message: 'Unauthorized - Token missing', valid: false, decoded });
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.json({ message: 'Unauthorized - Token missing', valid: false, decoded });

        }

        // Token is valid, you can return additional information if needed
        res.json({ message: 'Token is valid', valid: true, decoded });
    });
});

module.exports = router;
