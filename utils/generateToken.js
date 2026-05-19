const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    
    return jwt.sign({ 
        id: user._id,
        name: user.name }, 
        process.env.JWT_SECRET,
        { expiresIn: "15m" });
};

module.exports = generateToken;