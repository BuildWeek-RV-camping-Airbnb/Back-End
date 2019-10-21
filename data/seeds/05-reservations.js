exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reservations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reservations').insert([
  
            {
                start_date: "2019-10-20",
                end_date: "2019-10-22",
                user_id: 2,
                property_id: 1
            },

            {
                start_date: "2019-11-31",
                end_date: "2019-12-02",
                user_id: 4,
                property_id: 1
            },

            {
                start_date: "2020-01-02",
                end_date: "2020-01-08",
                user_id: 1,
                property_id: 2
            },

            {
                start_date: "2020-02-19",
                end_date: "2020-03-08",
                user_id: 3,
                property_id: 2
            },
            {
                start_date: "2019-10-31",
                end_date: "2019-11-02",
                user_id: 4,
                property_id: 3
            },

            {
                start_date: "2020-01-02",
                end_date: "2020-01-08",
                user_id: 1,
                property_id: 3
            },

            {
                start_date: "2020-02-19",
                end_date: "2020-03-08",
                user_id: 3,
                property_id: 4
            },

      ]);
    });
};
