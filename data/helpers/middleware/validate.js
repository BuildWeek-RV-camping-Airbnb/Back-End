const User = require('../models/users_model');
const bcrypt = require('bcryptjs');

function validate (req, res, next) {
    let { username, password } = req.body;

    if (username && password) {
        User.findById(username)
        .then(user => {
            if (user[0] && bcrypt.compareSync(password, user[0].password)) {
        
                req.body.id = user[0].id
                next();
            }
            else {
                res.status(401).json({ message: 'You shall not pass!!!' })
            }
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({ message: 'Ran into unexpected error'})
        })
    } else {
        res.status(400).json({ message: 'Please provide credentials'})
    }
}

module.exports = validate;