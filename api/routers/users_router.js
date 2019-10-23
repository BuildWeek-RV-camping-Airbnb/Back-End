const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../data/helpers/models/users_model');
const validate = require('../../data/helpers/middleware/validate');
const generateToken = require('../../data/helpers/middleware/generateToken');
const verifyToken = require('../../data/helpers/middleware/verifyToken');

const router = express.Router();

router.use(express.json());

/**
 * @api {get} api/users Get All Users
 * @apiName GetUsers
 * @apiGroup Users
 * 
 * @apiSuccess {Array} res Array of User Objects
 */
router.get('/', verifyToken, (req, res) => {
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
router.get('/:id', verifyToken, (req, res) => {
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
  const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash
  User.add(credentials)
  .then(user => {
    console.log(user[0])
    const token = generateToken(req.body)
    res.status(201).json({id: user[0], token});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end', err });
    });
});

/**
 * @api {post} api/users/login Login
 * @apiName Login
 * @apiGroup Users
 * 
 * @apiParam {String} username User username (required)
 * @apiParam {String} password User password (required)
 * 
 * @apiSuccess {Number} res.id User id
 * @apiSuccess {String} res.token token token
 */
router.post('/login', validate, (req, res) => {
    const token = generateToken(req.body)
    res.status(200).json({username: req.body.username, 
    id: req.req_id,
    owner: req.body.owner,
    token: token})
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
router.put('/:id', verifyToken,(req, res) => {
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
router.delete('/:id', verifyToken, (req, res) => {
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