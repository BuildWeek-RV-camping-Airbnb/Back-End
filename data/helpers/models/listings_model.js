const knexConfig = require('../../../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('listings');
}

function findById(id) {
    return db('listings')
    .where({ id }).first();
}

function findByProperty(property_id) {
    return db('listings')
        .join('amenities', "listings.amenity_id", "=", "amenities.id")
        .join('properties', "listings.property_id", "=", "properties.id")
        .where({ property_id });
}

function findByAmenity(amenity_id) {
    return db('listings')
        .join('amenities', "listings.amenity_id", "=", "amenities.id")
        .join('properties', "listings.property_id", "=", "properties.id")
        .where({ amenity_id });
}

function add(property) {
    return db('listings')
    .insert(property);
}

function update(changes, id) {
    return db('listings')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('listings')
    .where({ id })
    .del();
}

module.exports = {
    find,
    findById,
    findByProperty,
    findByAmenity,
    add,
    update,
    remove,
}