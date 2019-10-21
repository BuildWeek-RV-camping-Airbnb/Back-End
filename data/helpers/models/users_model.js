// const knexConfig = require('../../../knexfile');
// const knex = require('knex');
// const db = knex(knexConfig.development);
const db = require('../../db-config');

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
    .where({ id }).first();
}

function add(user) {
    return db('users')
    .insert(user);
}

function update(changes, id) {
    return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('users')
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