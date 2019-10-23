const express = require('express');

const Listing = require('../../data/helpers/models/listings_model');
const verifyToken = require('../../data/helpers/middleware/verifyToken');

const router = express.Router();

router.use(express.json());

/**
 * @api {get} api/listings Get All Listings
 * @apiName GetListings
 * @apiGroup Listings
 * 
 * @apiSuccess {Array} res Array of Listing Objects
 */
router.get('/',verifyToken, (req, res) => {
  Listing.find()
  .then(listings => {
    res.status(200).json({listings});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/listings/:id Get Listing by Id
 * @apiName GetListing by Id
 * @apiGroup Listings
 * 
 * @apiSuccess {Number} id Listing id
 * @apiSuccess {String} property_id Property Id
 * @apiSuccess {String} amenity_id Amenity ID
 */
router.get('/:id',verifyToken, (req, res) => {
  const { id } = req.params;

  Listing.findById(id)
  .then(listing => {
    if (listing) {
      res.status(200).json(listing);
    } else {
      res.status(404).json({ message: 'Could not find listing with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/listings/amenity/:id Get Properties by Amenity
 * @apiName GetProperties by Amenity
 * @apiGroup Properties
 * 
 * @apiSuccess {Integer} id Listing id
 * @apiSuccess {String} amenity_id Amenity Id
 * @apiSuccess {String} property_id Property Id
 * @apiSuccess {String} name Amenity name
 * @apiSuccess {String} icon Icon url
 * @apiSuccess {String} property_name Property name
 * @apiSuccess {String} address Address
 * @apiSuccess {String} city City
 * @apiSuccess {String} state State
 * @apiSuccess {Integer} price Price
 * @apiSuccess {Number} rating Rating
 * @apiSuccess {Integer} owner_id Owner Id
 */
router.get('/amenity/:id',verifyToken, (req, res) => {
    const { id } = req.params;
  
    Listing.findByAmenity(id)
    .then(listing => {
      if (listing) {
        res.status(200).json(listing);
      } else {
        res.status(404).json({ message: 'Could not find listing with given id.' })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

/**
 * @api {get} api/listings/property/:id Get Amenities by Property
 * @apiName GetAmenities by Property
 * @apiGroup Amenities
 * 
 * @apiSuccess {Integer} id Listing id
 * @apiSuccess {String} amenity_id Amenity Id
 * @apiSuccess {String} property_id Property Id
 * @apiSuccess {String} name Amenity name
 * @apiSuccess {String} icon Icon url
 * @apiSuccess {String} property_name Property name
 * @apiSuccess {String} address Address
 * @apiSuccess {String} city City
 * @apiSuccess {String} state State
 * @apiSuccess {Integer} price Price
 * @apiSuccess {Number} rating Rating
 * @apiSuccess {Integer} owner_id Owner Id
 */
router.get('/property/:id',verifyToken, (req, res) => {
const { id } = req.params;

Listing.findByProperty(id)
.then(listing => {
    if (listing) {
    res.status(200).json(listing);
    } else {
    res.status(404).json({ message: 'Could not find listing with given id.' })
    }
})
.catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
});
});

/**
 * @api {post} api/users Create New Listing
 * @apiName Create New Listing
 * @apiGroup Listings
 * 
 * @apiParam {String} property_id Property Id (required)
 * @apiParam {String} amenity_id Amenity Id (required)
 * 
 * @apiSuccess {Number} res Listing id
 */
router.post('/',verifyToken, (req, res) => {
  const listingData = req.body;
    console.log(req.body)
  Listing.add(listingData)
  .then(listing => {
    res.status(201).json(listing[0]);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

/**
 * @api {put} api/listings/:id Update Listing
 * @apiName Update Listing
 * @apiGroup Listings
 * 
 * @apiParam {String} property_id Property Id (required)
 * @apiParam {String} amenity_id Amenity Id (required)
 * 
 * @apiSuccess {Number} res 1 if Updated
 */
router.put('/:id',verifyToken, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Listing.findById(id)
  .then(listing => {
    if (listing) {
      Listing.update(changes, id)
      .then(updatedListing => {
        res.status(201).json(updatedListing);
      });
    } else {
      res.status(404).json({ message: 'Could not find listing with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {delete} api/listings/:id Deletes Listing
 * @apiName Deletes Listing
 * @apiGroup Listings
 * 
 * @apiSuccess {null} res null
 */
router.delete('/:id',verifyToken, (req, res) => {
  const { id } = req.params;

  Listing.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find listing with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

module.exports = router;