const express = require('express');

const Reservation = require('../../data/helpers/models/reservations_model');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Reservation.find()
  .then(reservations => {
    res.status(200).json({reservations});
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Reservation.findById(id)
  .then(reservation => {
    if (reservation) {
      res.status(200).json({reservation});
    } else {
      res.status(404).json({ message: 'Could not find reservation with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.get('/owner/:id', (req, res) => {
  const { id } = req.params;

  Reservation.findByOwner(id)
  .then(reservations => {
    if (reservations.length) {
      res.json(reservations);
    } else {
      res.status(404).json({ message: 'Could not find reservations for given owner' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params;
  
    Reservation.findByUser(id)
    .then(reservations => {
      if (reservations.length) {
        res.json({reservations});
      } else {
        res.status(404).json({ message: 'Could not find reservations for given owner' })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
  });

  router.get('/property/:id', (req, res) => {
    const { id } = req.params;
  
    Reservation.findByProperty(id)
    .then(reservations => {
      if (reservations.length) {
        res.json({reservations});
      } else {
        res.status(404).json({ message: 'Could not find reservations for given owner' })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
  });

router.post('/', (req, res) => {
  const reservationData = req.body;
    console.log(req.body)
  Reservation.add(reservationData)
  .then(reservation => {
    res.status(201).json({reservation});
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Reservation.findById(id)
  .then(reservation => {
    if (reservation) {
      Reservation.update(changes, id)
      .then(updatedReservation => {
        res.status(201).json(updatedReservation);
      });
    } else {
      res.status(404).json({ message: 'Could not find reservation with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Reservation.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find reservation with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

module.exports = router;