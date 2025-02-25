const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../services/token');

router.post('/', async (req, res) => {
    const token = req.body.token;

    verifyToken({ token }).then((resp) => {
        res.json(resp);
    });
});

module.exports = router;
