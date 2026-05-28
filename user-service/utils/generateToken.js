const jwt = require('jsonwebtoken');
const config = require('../config/index')

async function generateToken(user) {

    return await jwt.sign(
        {
            id: user._id,
            role: user.name
        },
        config.JWT_SECRET,
        {
            expiresIn: '7d'
        }
    );
}

module.exports = generateToken;