const express = require('express');

const Property = require('../../data/helpers/models/properties_model');

const router = express.Router();

router.use(express.json());

/**
 * @api {get} api/properties Get All Properties
 * @apiName GetProperties
 * @apiGroup Properties
 * 
 * @apiSuccess {Array} res Array of Property Objects
 */
router.get('/', (req, res) => {
  Property.find()
  .then(properties => {
    res.status(200).json({properties});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/properties/:id Get Property by Id
 * @apiName GetProperty by Id
 * @apiGroup Properties
 * 
 * @apiSuccess {integer} id Property id
 * @apiSuccess {String} property_name Property name
 * @apiSuccess {String} address Address
 * @apiSuccess {String} city City
 * @apiSuccess {String} state State
 * @apiSuccess {integer} price Price
 * @apiSuccess {number} rating Rating
 * @apiSuccess {integer} owner_id Owner Id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Property.findById(id)
  .then(property => {
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: 'Could not find property with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/properties/user/:id Get Properties owned by User
 * @apiName GetProperties by User
 * @apiGroup Properties
 * 
 * @apiSuccess {Integer} id User id
 * @apiSuccess {Integer} id Property id
 * @apiSuccess {String} property_name Property name
 * @apiSuccess {String} address Address
 * @apiSuccess {String} city City
 * @apiSuccess {String} state State
 * @apiSuccess {Integer} price Price
 * @apiSuccess {Number} rating Rating
 * @apiSuccess {Integer} owner_id Owner Id
 * @apiSuccess {String} first_name User first name
 * @apiSuccess {String} last_name User last name
 * @apiSuccess {String} email User email
 * @apiSuccess {String} username User username
 * @apiSuccess {String} password User password
 * @apiSuccess {Boolean} owner User true/false
 * @apiSuccess {String} avatar User avatar url
 */
router.get('/user/:id', (req, res) => {
  const { id } = req.params;

  Property.findByUser(id)
  .then(properties => {
    if (properties.length) {
      res.json({properties});
    } else {
      res.status(404).json({ message: 'Could not find properties for given owner' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {post} api/properties/ Create New Property
 * @apiName Create New Property
 * @apiGroup Properties
 * 
 * @apiParam {String} property_name Property name (required)
 * @apiParam {String} address Address (required)
 * @apiParam {String} city City (required)
 * @apiParam {String} state State (required)
 * @apiParam {integer} price Price (required)
 * @apiParam {number} rating Rating (required)
 * @apiParam {integer} owner_id Owner Id (required)
 * 
 * @apiSuccess {Number} res Property id
 */
router.post('/', (req, res) => {
  const propertyData = req.body;
    console.log(req.body)
  Property.add(propertyData)
  .then(property => {
    res.status(201).json(property[0]);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

/**
 * @api {put} api/properties/:id Update Property
 * @apiName Update Property
 * @apiGroup Properties
 * 
 * @apiParam {String} property_name Property name (required)
 * @apiParam {String} address Address (required)
 * @apiParam {String} city City (required)
 * @apiParam {String} state State (required)
 * @apiParam {integer} price Price (required)
 * @apiParam {number} rating Rating (required)
 * @apiParam {integer} owner_id Owner Id (required)
 * 
 * @apiSuccess {Number} res 1 if Updated
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Property.findById(id)
  .then(property => {
    if (property) {
      Property.update(changes, id)
      .then(updatedProperty => {
        res.status(201).json(updatedProperty);
      });
    } else {
      res.status(404).json({ message: 'Could not find property with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {delete} api/properties/:id Deletes Property
 * @apiName Deletes Property
 * @apiGroup Properties
 * 
 * @apiSuccess {null} res null
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Property.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find property with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

module.exports = router;