const express = require('express');

const Amenity = require('../../data/helpers/models/amenities_model');

const router = express.Router();

router.use(express.json());
/**
 * @api {get} /api/amenities Get All Amenities
 * @apiName GetAmenities
 * @apiGroup Amenities
 * 
 * @apiSuccess {Array} res Array of Amenity Objects
 */
router.get('/', (req, res) => {
  Amenity.find()
  .then(amenities => {
    res.status(200).json(amenities);
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} /api/amenities/:id Get Amenity by Id
 * @apiName GetAmenity by Id
 * @apiGroup Amenities
 * 
 * @apiSuccess {Number} id Amenity id
 * @apiSuccess {String} name Amenity name
 * @apiSuccess {String} icon Amenity icon url
 */

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Amenity.findById(id)
  .then(amenity => {
    if (amenity) {
      res.status(200).json(amenity);
    } else {
      res.status(404).json({ message: 'Could not find amenity with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {post} /api/amenities Create New Amenity
 * @apiName Create New Amenity
 * @apiGroup Amenities
 * 
 * @apiParam {string} name Amenity name
 * @apiParam {string} icon Amenity icon url
 * 
 * @apiSuccess {Number} id Amenity id
 * @apiSuccessExample Success-Response:
 *     201 Created
 *      8
 */
router.post('/', (req, res) => {
  const amenityData = req.body;
    console.log(req.body)
  Amenity.add(amenityData)
  .then(amenity => {
    res.status(201).json(amenity[0]);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});


/**
 * @api {put} /api/amenities/:id Update Amenity
 * @apiName Update Amenity
 * @apiGroup Amenities
 * 
 * @apiParam {string} name Amenity name
 * @apiParam {string} icon Amenity icon url
 * 
 * @apiSuccess {Number} Success 1 for true
 * @apiSuccessExample Success-Response:
 *     201 Created
 *      1
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Amenity.findById(id)
  .then(amenity => {
    if (amenity) {
      Amenity.update(changes, id)
      .then(updatedAmenity => {
        res.status(201).json(updatedAmenity);
      });
    } else {
      res.status(404).json({ message: 'Could not find amenity with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {delete} /api/amenities/:id Delete Amenity
 * @apiName Delete Amenity
 * @apiGroup Amenities
 * 
 * @apiSuccess {Number} Success 1 for true
 * @apiSuccessExample Success-Response:
 *     200 Deleted
 *      1
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Amenity.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find amenity with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

module.exports = router;