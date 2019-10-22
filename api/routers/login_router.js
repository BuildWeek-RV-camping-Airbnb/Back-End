const express = require('express');

const User = require('../../data/helpers/models/users_model');
const validate = require('../../data/helpers/middleware/validate')
const router = express.Router();

router.use(express.json());

router.get('/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id)
  .then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.post('/', validate, (req, res) => {
  const userData = req.body;
    console.log(req.body)
  User.add(userData)
  .then(user => {
    res.status(201).json({user});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

module.exports = router;