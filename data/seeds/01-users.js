exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
  
          {
            "first_name": "Jessica",
            "last_name": "Qwerty",
            "email": "jessica@gmail.com",
            "username": "Jessica",
            "password": "qwerty",
            "owner": "true",
            "avatar": ""
          },
          
          {
            "first_name": "Tom",
            "last_name": "Qwerty",
            "email": "tom@gmail.com",
            "username": "Tom",
            "password": "qwerty",
            "owner": "false",
            "avatar": ""
          },

          {
            "first_name": "Lee",
            "last_name": "Qwerty",
            "email": "lee@gmail.com",
            "username": "Lee",
            "password": "qwerty",
            "owner": "false",
            "avatar": ""
          },

          {
            "first_name": "Frank",
            "last_name": "Qwerty",
            "email": "frank@gmail.com",
            "username": "Frank",
            "password": "qwerty",
            "owner": "true",
            "avatar": ""
          },


      ]);
    });
};