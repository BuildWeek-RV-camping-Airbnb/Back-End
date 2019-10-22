const express = require('express');

const User = require('../../data/helpers/models/users_model');

const router = express.Router();

router.use(express.json());

/**
 * @api {get} api/users Get All Users
 * @apiName GetUsers
 * @apiGroup Users
 * 
 * @apiSuccess {Array} res Array of User Objects
 */
router.get('/', (req, res) => {
  User.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/users/:id Get User by Id
 * @apiName GetUser by Id
 * @apiGroup Users
 * 
 * @apiSuccess {Number} id User id
 * @apiSuccess {String} first_name User first name
 * @apiSuccess {String} last_name User last name
 * @apiSuccess {String} email User email
 * @apiSuccess {String} username User username
 * @apiSuccess {String} password User password
 * @apiSuccess {boolean} owner User true/false
 * @apiSuccess {String} avatar User avatar url
 */
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

/**
 * @api {post} api/users Create New User
 * @apiName Create New User
 * @apiGroup Users
 * 
 * @apiParam {String} first_name User first name (required)
 * @apiParam {String} last_name User last name (required)
 * @apiParam {String} email User email (required)
 * @apiParam {String} username User username (required)
 * @apiParam {String} password User password (required)
 * @apiParam {boolean} owner User true/false (required)
 * @apiParam {String} avatar User avatar url (optional)
 * 
 * @apiSuccess {Number} res User id
 */
router.post('/', (req, res) => {
  const userData = req.body;
    console.log(req.body)
  User.add(userData)
  .then(user => {
    res.status(201).json(user[0]);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

/**
 * @api {put} api/users/:id Update User
 * @apiName Update User
 * @apiGroup Users
 * 
 * 
 * @apiParam {String} first_name User first name (required)
 * @apiParam {String} last_name User last name (required)
 * @apiParam {String} email User email (required)
 * @apiParam {String} username User username (required)
 * @apiParam {String} password User password (required)
 * @apiParam {boolean} owner User true/false (required)
 * @apiParam {String} avatar User avatar url (optional)
 * 
 * @apiSuccess {Number} res 1 if Updated
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  User.findById(id)
  .then(user => {
    console.log(user, 'fewef')
    if (user) {
      User.update(changes, id)
      .then(updatedUser => {
        console.log(updatedUser)
        res.status(201).json(updatedUser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {delete} api/users/:id Deletes User
 * @apiName Deletes User
 * @apiGroup Users
 * 
 * @apiSuccess {null} res null
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  User.remove(id)
  .then(deleted => {
    if (deleted) {
      console.log(deleted)
      res.status(204).json(deleted);
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

module.exports = router;