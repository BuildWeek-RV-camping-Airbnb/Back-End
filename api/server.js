const express = require('express');
const loginRouter = require('./routers/login_router');
const usersRouter = require('./routers/users_router');
const listingsRouter = require('./routers/listings_router');
const amenitiesRouter = require('./routers/amenities_router');
const propertiesRouter = require('./routers/properties_router');
const reservationsRouter = require('./routers/reservations_router');

router.use(cors());

const server = express();
server.use('/', express.static('docs'));
server.use('/api/users', usersRouter)
server.use('/api/login', loginRouter)
server.use('/api/listings', listingsRouter)
server.use('/api/amenities', amenitiesRouter)
server.use('/api/properties', propertiesRouter)
server.use('/api/reservations', reservationsRouter)

module.exports = server