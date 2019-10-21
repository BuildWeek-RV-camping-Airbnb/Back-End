// const knexConfig = require('../../../knexfile');
// const knex = require('knex');
// const db = knex(knexConfig.development);
const db = require('../../db-config');

function find() {
    return db('reservations');
}

function findById(id) {
    return db('reservations')
    .where({ id }).first();
}

function findByOwner(owner_id) {
    return db('reservations')
        .join('owners', "reservations.owner_id", "=", "owners.id")
        .where({ owner_id })
}

function findByUser(user_id) {
    return db('reservations')
        .join('users', "reservations.user_id", "=", "users.id")
        .where({ user_id })
}

function findByProperty(property_id) {
    return db('reservations')
        .join('properties', "reservations.property_id", "=", "properties.id")
        .where({ property_id })
}

function add(reservation) {
    return db('reservations')
    .insert(reservation);
}

function update(changes, id) {
    return db('reservations')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('reservations')
    .where({ id })
    .del();
}

module.exports = {
    find,
    findById,
    findByOwner,
    findByUser,
    findByProperty,
    add,
    update,
    remove,
}