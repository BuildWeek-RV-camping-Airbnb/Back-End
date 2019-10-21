const express = require('express');

const Listing = require('../../data/helpers/models/listings_model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Listing.find()
  .then(listings => {
    res.status(200).json({listings});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.get('/:id', (req, res) => {
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

router.get('/amenity/:id', (req, res) => {
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

router.get('/property/:id', (req, res) => {
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

router.post('/', (req, res) => {
  const listingData = req.body;
    console.log(req.body)
  Listing.add(listingData)
  .then(listing => {
    res.status(201).json({listing});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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