
exports.up = function(knex) {
    return knex.schema    
    .createTable('users', users => {
      users.increments();
      users
        .string('first_name', 128)
        .notNullable();
      users
        .string('last_name', 128)
        .notNullable();
      users
        .string('email', 128)
        .notNullable()
        .unique();
      users
        .string('username', 128)
        .notNullable()
        .unique();
      users
        .string('password', 128)
        .notNullable()
      users
      .boolean('owner', 128)
      .notNullable()
      users
      .string('avatar', 128)
      
    })

    
    .createTable('properties', property => {
      property.increments();

      property
        .string('property_name', 128)
        .notNullable();
      property
        .string('description', 1000)
        .notNullable();

      property
      .string('address', 128)
      .notNullable();

      property
      .string('city', 128)
      .notNullable();

      property
      .string('state', 128)
      .notNullable();

      property
      .string('image', 128)
      .notNullable();

      property
      .integer('price')
      .notNullable();

      property
      .integer('rating', 2, 2);

      property
      .integer('owner_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    })

    .createTable('amenities', amenity => {
      amenity.increments();

      amenity
        .string('name', 128)
        .notNullable()
        .unique();
      amenity
        .string('icon', 128)
        .notNullable()
    })

    .createTable('listings', listing => {
      listing.increments();

      // listing.primary(['amenity_id', 'property_id']);

      listing
        .integer('amenity_id')
        .notNullable()
        .references('id')
        .inTable('amenities')
        .onDelete('CASCADE');
      listing
        .integer('property_id')
        .notNullable()
        .references('id')
        .inTable('properties')
        .onDelete('CASCADE');
    })

    .createTable('reservations', reservation => {
      reservation.increments();
      // property.primary(['property_id', 'user_id', 'owner_id']);

      reservation
      .date('start_date', 128)
      .notNullable();

      reservation
      .date('end_date', 128)
      .notNullable();

      reservation
      .integer('property_id', 128)
      .notNullable()
      .references('id')
      .inTable('properties')
      .onDelete('CASCADE');

      reservation
      .integer('user_id', 128)
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('reservations')
    .dropTableIfExists('listings')
    .dropTableIfExists('properties')
    .dropTableIfExists('amenities')
    .dropTableIfExists('owners')
    .dropTableIfExists('users');
};
