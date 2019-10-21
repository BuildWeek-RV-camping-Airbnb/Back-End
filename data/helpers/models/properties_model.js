// const knexConfig = require('../../../knexfile');
// const knex = require('knex');
// const db = knex(knexConfig.development);
const db = require('../../db-config');

function find() {
    return db('properties');
}

function findById(id) {
    return db('properties')
    .where({ id }).first();
}

function findByUser(owner_id) {
    return db('properties')
        .join('users', "properties.owner_id", "=", "users.id")
        .where({ owner_id })
}

function add(property) {
    return db('properties')
    .insert(property);
}

function update(changes, id) {
    return db('properties')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('properties')
    .where({ id })
    .del();
}

module.exports = {
    find,
    findById,
    findByUser,
    add,
    update,
    remove,
}