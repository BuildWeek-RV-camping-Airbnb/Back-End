const express = require('express');

const Amenity = require('../../data/helpers/models/amenities_model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Amenity.find()
  .then(amenities => {
    res.status(200).json({amenities});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

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

router.post('/', (req, res) => {
  const amenityData = req.body;
    console.log(req.body)
  Amenity.add(amenityData)
  .then(amenity => {
    res.status(201).json({amenity});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

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