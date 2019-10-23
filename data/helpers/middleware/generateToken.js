const secret = 'itsSoSecret'
const jwt = require('jsonwebtoken');
function generateToken(user) {
    const payload = {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        owner: user.owner,
        avatar: user.avatar
    };
    
    const options = {
        expiresIn: '10h'
    }
  
    return jwt.sign(payload, secret, options)
  }

  module.exports = generateToken;