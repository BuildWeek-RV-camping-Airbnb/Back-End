const express = require('express');

const Property = require('../../data/helpers/models/properties_model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Property.find()
  .then(properties => {
    res.status(200).json({properties});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

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

router.post('/', (req, res) => {
  const propertyData = req.body;
    console.log(req.body)
  Property.add(propertyData)
  .then(property => {
    res.status(201).json({property});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

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