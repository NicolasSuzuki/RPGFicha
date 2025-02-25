const jwt = require('jsonwebtoken');
const db = require('../db'); // Import the database connection

const verifyToken = async ({ token }) => {
    if (!token) {
        return ({ message: 'Unauthorized - Token missing', valid: false });
    }

    return jwt.verify(token, 'your-secret-key', async (err, decoded) => {
        if (err) {
            return ({ message: 'Unauthorized - Token missing', valid: false });

        }

        // Token is valid, you can return additional information if needed
        const [results, fields] = await db.executeQuery('SELECT username, email, is_master FROM users WHERE id = ?', [decoded.userId])
        if (err) {
            console.error(err);
            return ({ error: 'Database error' });
        }

        if (results.length === 0) {
            return ({ error: 'User not found' });
        }

        return ({ message: 'Token is valid', valid: true, decoded, user: results });
    });
};

module.exports = { verifyToken };