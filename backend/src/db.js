const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'ficha_my_hero',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

const executeQuery = async (query, params) => {
    const [rows] = await pool.execute(query, params);
    return rows;
};

const findUserByUsername = async (username) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    const params = [username];
    return executeQuery(query, params);
};

const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const params = [email];
    return executeQuery(query, params);
};

const comparePasswords = async (plaintextPassword, hashedPassword) => {
    return bcrypt.compare(plaintextPassword, hashedPassword);
};

const findCharacterByName = async (name) => {
    const query = 'SELECT * FROM usercharacter WHERE name = ?';
    const params = [name];
    return executeQuery(query, params);
};

const findCharacterByUserIDAndName = async (user_id, name) => {
    const query = 'SELECT * FROM usercharacter WHERE user_id = ? AND name = ?';
    const params = [user_id, name];
    return executeQuery(query, params);
};

const getAllCharacters = async () => {
    const query = 'SELECT * FROM usercharacter';
    return executeQuery(query, []);
};

const getAllPlayers = async () => {
    const query = 'SELECT * FROM usercharacter where user_id is not null';
    return executeQuery(query, []);
};

const updatePlayerLevelAndSkillPoints = async (user_id, characterID, newLevel, newSkillPoints) => {
    const query = 'UPDATE usercharacter SET level = ?, skillPoints = ? WHERE user_id = ? AND characterID = ?';
    const params = [newLevel, newSkillPoints, user_id, characterID];
    return executeQuery(query, params);
};

const updateCharacterHP = async (user_id, characterID, newHP) => {
    const query = 'UPDATE usercharacter SET hp = ? WHERE user_id = ? AND characterID = ?';
    const params = [newHP, user_id, characterID];
    return executeQuery(query, params);
};

const getCharacterByUserID = async (user_id) => {
    console.log(user_id)
    const query = 'SELECT * FROM usercharacter WHERE user_id = ?';
    const params = [user_id];
    const result = await executeQuery(query, params);

    return result.length > 0 ? result[0] : null;
};

const getCharacterByID = async (id) => {
    console.log(id)
    const query = 'SELECT * FROM usercharacter WHERE id = ?';
    const params = [id];
    const result = await executeQuery(query, params);

    return result.length > 0 ? result[0] : null;
};

module.exports = {
    executeQuery,
    findUserByUsername,
    comparePasswords,
    findCharacterByUserIDAndName,
    getAllPlayers,
    getAllCharacters,
    updatePlayerLevelAndSkillPoints,
    updateCharacterHP,
    getCharacterByUserID,
    findUserByEmail,
    findCharacterByName,
    getCharacterByID,
};