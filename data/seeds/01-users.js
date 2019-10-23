exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('users').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
  
          {
            "first_name": "Jessica",
            "last_name": "Qwerty",
            "email": "jessica@gmail.com",
            "username": "Jessica",
            "password": "$2a$14$R3pz5CMIviyUl1.d24kIFO8zK8vofthuoU.q.aNHkmp1ghsxeUPV2",
            "owner": "true",
            "avatar": ""
          },
          
          {
            "first_name": "Tom",
            "last_name": "Qwerty",
            "email": "tom@gmail.com",
            "username": "Tom",
            "password": "$2a$14$R3pz5CMIviyUl1.d24kIFO8zK8vofthuoU.q.aNHkmp1ghsxeUPV2",
            "owner": "false",
            "avatar": ""
          },

          {
            "first_name": "Lee",
            "last_name": "Qwerty",
            "email": "lee@gmail.com",
            "username": "Lee",
            "password": "$2a$14$R3pz5CMIviyUl1.d24kIFO8zK8vofthuoU.q.aNHkmp1ghsxeUPV2",
            "owner": "false",
            "avatar": ""
          },

          {
            "first_name": "Frank",
            "last_name": "Qwerty",
            "email": "frank@gmail.com",
            "username": "Frank",
            "password": "$2a$14$R3pz5CMIviyUl1.d24kIFO8zK8vofthuoU.q.aNHkmp1ghsxeUPV2",
            "owner": "true",
            "avatar": ""
          },


      ]);
    // });
};