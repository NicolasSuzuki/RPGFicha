const express = require('express');
const cors = require('cors');


const app = express();
const path = require('path');
// Enable CORS for all routes
app.use(cors());
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json({credentials: true}));

// Import routes
const usersRoute = require('./src/routes/user/users');
const loginRoute = require('./src/routes/user/login');
const registerRoute = require('./src/routes/user/register');
const verifyTokenRoute = require('./src/routes/user/verify-token');
const changePasswordRoute = require('./src/routes/user/change-password');
const registerCharacterRoute = require('./src/routes/characters/register-character');
const levelUpRoute = require('./src/routes/characters/level-up');
const getCharacterRoute = require('./src/routes/characters/get-character'); // Add this line
const getAllCharactersRoute = require('./src/routes/characters/all-character'); // Add this line

// Use routes
app.use('/api/users', usersRoute);
app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);
app.use('/api/change-password', changePasswordRoute);
app.use('/api/register-character', registerCharacterRoute);
app.use('/api/level-up', levelUpRoute);
app.use('/api/get-character', getCharacterRoute); // Add this line
app.use('/api/all-characters', getAllCharactersRoute);
app.use('/api/verify-token', verifyTokenRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
