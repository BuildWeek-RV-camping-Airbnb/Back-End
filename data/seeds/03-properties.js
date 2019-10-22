exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('properties').truncate()
//     .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
  
          {
              'property_name': "",
              'description': "aertthaersthrsthrtshsrt",
              'address': "123 Easy St.",
              'city': "Miami",
              'state': "Florida",
              'image': "ggredgg",
              'price': 30,
              'rating': 4,
              'owner_id': 1
          },
          
          {              
              'property_name': "The Ranch",
              'description': "aertthaersthrsthrtshsrt",
              'address': "321 West St.",
              'city': "Austin",
              'state': "Texas",
              'image': "ggredgg",
              'price': 40,
              'rating': 3,
              'owner_id': 3
          },

          {             
              'property_name': "Back Yard",
              'description': "aertthaersthrsthrtshsrt",
              'address': "101 Lazy Dr.",
              'city': "San Jose",
              'state': "Caliornia",
              'image': "ggredgg",
              'price': 50,
              'rating': 5,
              'owner_id': 3
          },

          {             
              'property_name': "Empty Lot",
              'description': "its really just an empty lot",
              'address': "1 Wrong Way.",
              'city': "Centralia",
              'state': "Pennsylvania",
              'image': "ggredgg",
              'price': 35,
              'rating': 2,
              'owner_id': 2
          },

          

      ]);
    // });
};
