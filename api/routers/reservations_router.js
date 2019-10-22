const express = require('express');

const Reservation = require('../../data/helpers/models/reservations_model');

const router = express.Router();

router.use(express.json());

/**
 * @api {get} api/reservations Get All Reservations
 * @apiName GetReservations
 * @apiGroup Reservations
 * 
 * @apiSuccess {Array} res Array of Reservation Objects
 */
router.get('/', (req, res) => {
  Reservation.find()
  .then(reservations => {
    res.status(200).json(reservations);
  })
  .catch(err => {
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/reservations/:id Get Reservation by Id
 * @apiName GetReservationById
 * @apiGroup Reservations
 * 
 * @apiSuccess {Integer} id Reservation id
 * @apiSuccess {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiSuccess {Date} end_date End Date ('YYYY-MM-DD')
 * @apiSuccess {Integer} property_id Property Id
 * @apiSuccess {Integer} user_id User Id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Reservation.findById(id)
  .then(reservation => {
    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ message: 'Could not find reservation with given id.' })
    }
  })
  .catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
  });
});

/**
 * @api {get} api/reservations/owner/:id Get Reservations by Owner
 * @apiName GetReservationsByOwner
 * @apiGroup Reservations
 * 
 * @apiSuccess {Integer} id Reservation id
 * @apiSuccess {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiSuccess {Date} end_date End Date ('YYYY-MM-DD')
 * @apiSuccess {Integer} property_id Property Id
 * @apiSuccess {Integer} user_id User Id
 */
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

/**
 * @api {get} api/reservations/user/:id Get Reservations by User
 * @apiName GetReservationsByUser
 * @apiGroup Reservations
 * 
 * @apiSuccess {Integer} id Reservation id
 * @apiSuccess {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiSuccess {Date} end_date End Date ('YYYY-MM-DD')
 * @apiSuccess {Integer} property_id Property Id
 * @apiSuccess {Integer} user_id User Id
 * @apiSuccess {String} first_name User first name
 * @apiSuccess {String} last_name User last name
 * @apiSuccess {String} email User email
 */
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

  /**
 * @api {get} api/reservations/property/:id Get Reservations by Property
 * @apiName GetReservationsByProperty
 * @apiGroup Reservations
 * 
 * @apiSuccess {Integer} id Reservation id
 * @apiSuccess {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiSuccess {Date} end_date End Date ('YYYY-MM-DD')
 * @apiSuccess {Integer} property_id Property Id
 * @apiSuccess {Integer} user_id User Id
 * @apiSuccess {integer} id Property id
 * @apiSuccess {String} property_name Property name
 * @apiSuccess {String} address Address
 * @apiSuccess {String} city City
 * @apiSuccess {String} state State
 * @apiSuccess {integer} price Price
 * @apiSuccess {number} rating Rating
 * @apiSuccess {integer} owner_id Owner Id
 */
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

/**
 * @api {post} api/reservations Create New Reservations
 * @apiName Create New Reservations
 * @apiGroup Reservations
 * 
 * @apiParam {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiParam {Date} end_date End Date ('YYYY-MM-DD')
 * @apiParam {Integer} property_id Property Id
 * @apiParam {Integer} user_id User Id
 * 
 * @apiSuccess {Number} res Reservation id
 */
router.post('/', (req, res) => {
  const reservationData = req.body;
    console.log(req.body)
  Reservation.add(reservationData)
  .then(reservation => {
    res.status(201).json(reservation[0]);
  })
  .catch (err => {
    console.log(err.message)
    res.status(500).json({ message: 'Something most likely something wrong on the back-end' });
    });
});


/**
 * @api {put} api/reservations Update Reservation
 * @apiName Update Reservation
 * @apiGroup Reservations
 * 
 * @apiParam {Date} start_date Start Date ('YYYY-MM-DD')
 * @apiParam {Date} end_date End Date ('YYYY-MM-DD')
 * @apiParam {Integer} property_id Property Id
 * @apiParam {Integer} user_id User Id
 * 
 * @apiSuccess {Number} res 1 if Updated
 */
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

/**
 * @api {delete} api/reservations/:id Deletes Reservation
 * @apiName Deletes Reservation
 * @apiGroup Reservations
 * 
 * @apiSuccess {null} res null
 */
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