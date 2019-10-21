const knexConfig = require('../../../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('amenities');
}

function findById(id) {
    return db('amenities')
    .where({ id }).first();
}

function add(amenity) {
    return db('amenities')
    .insert(amenity);
}

function update(changes, id) {
    return db('amenities')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('amenities')
    .where({ id })
    .del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}