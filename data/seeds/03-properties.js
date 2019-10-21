exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('properties').truncate()
//     .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
  
          {
              'property_name': "",
              'address': "123 Easy St.",
              'city': "Miami",
              'state': "Florida",
              'price': 30,
              'rating': 4,
              'owner_id': 1
          },
          
          {              
              'property_name': "The Ranch",
              'address': "321 West St.",
              'city': "Austin",
              'state': "Texas",
              'price': 40,
              'rating': 3,
              'owner_id': 3
          },

          {             
              'property_name': "Back Yard",
              'address': "101 Lazy Dr.",
              'city': "San Jose",
              'state': "Caliornia",
              'price': 50,
              'rating': 5,
              'owner_id': 3
          },

          {             
              'property_name': "Empty Lot",
              'address': "1 Wrong Way.",
              'city': "Centralia",
              'state': "Pennsylvania",
              'price': 35,
              'rating': 2,
              'owner_id': 2
          },

          

      ]);
    // });
};
