exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('properties').truncate()
//     .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
  
          {
              'property_name': "Underground Hygge",
              'description': "This inspired dwelling!",
              'address': "424 Woodland Street",
              'city': "Orlando",
              'state': "Florida",
              'image': "ggredgg",
              'price': 30,
              'rating': 2,
              'owner_id': 1
          },
          
          {              
              'property_name': "The Ranch",
              'description': "Walking distance to the Mercedes-Benz Stadium",
              'address': "321 West St.",
              'city': "Austin",
              'state': "Texas",
              'image': "ggredgg",
              'price': 40,
              'rating': 2,
              'owner_id': 4
          },

          {             
              'property_name': "Olympic Coast Camp",
              'description': "Guests will have access to The Palms Casino, Pearl theater, Restaurants/Buffet, IMAX Theater, Kaos Pool party’s, GhostBar Rooftop nightclub and much more.",
              'address': "101 Lazy Dr.",
              'city': "San Jose",
              'state': "Caliornia",
              'image': "ggredgg",
              'price': 50,
              'rating': 2,
              'owner_id': 4
          },

          {             
              'property_name': "Empty Lot",
              'description': "its really just an empty lot",
              'address': "50 Oak St.",
              'city': "Milwaukee",
              'state': "Wisconsin",
              'image': "ggredgg",
              'price': 35,
              'rating': 2,
              'owner_id': 4
          },
          {             
            'property_name': "Camping and Glamping Sites at Kuduremukh valley",
            'description': "The Pleasant Bay Lookout is a private room with a spectacular view, nestled in the trees.",
            'address': "574 S. Griffin Dr.",
            'city': "Dallas",
            'state': "Texas",
            'image': "ggredgg",
            'price': 45,
            'rating': 2,
            'owner_id': 1
        },
        {             
            'property_name': "Camping on the New River",
            'description': "Guests will have access to The Palms Casino, Pearl theater.",
            'address': "4 E. Brookside Ave.",
            'city': "Portland",
            'state': "Oregon",
            'image': "ggredgg",
            'price': 25,
            'rating': 2,
            'owner_id': 4
        },
        {             
            'property_name': "TAMANCO TUBISMO",
            'description': "Meeting accurate expectations is very important to us.",
            'address': "36 High Road",
            'city': "Seattle",
            'state': "Washington",
            'image': "ggredgg",
            'price': 37,
            'rating': 2,
            'owner_id': 1
        },
        {             
            'property_name': "Pisgah Highlands off grid cabin",
            'description': "Downtown, the best bit of Manhattan.",
            'address': "65 Lower River Avenue",
            'city': "Boise",
            'state': "Idaho",
            'image': "ggredgg",
            'price': 45,
            'rating': 2,
            'owner_id': 4
        },
        {             
            'property_name': "Pirates of the Caribbean Getaway",
            'description': "Beautiful PRIVATE TROPICAL Guest House in Topanga Canyon! Look up Cody Simpson & Ziggy Marley's video, Love on YouTube for video of property!",
            'address': "52 Holly Ave.",
            'city': "Reno",
            'state': "Nevada",
            'image': "ggredgg",
            'price': 27,
            'rating': 2,
            'owner_id': 1
        },
        {             
            'property_name': "Pleasant Bay Lookout (epic sea view + hot tub)",
            'description': "The Pleasant Bay Lookout is a private room with a spectacular view, nestled in the trees.",
            'address': "291 Campfire Ave.",
            'city': "Phoenix",
            'state': "Arizona",
            'image': "ggredgg",
            'price': 34,
            'rating': 2,
            'owner_id': 1
        },
        {             
            'property_name': "Magic Barn",
            'description': "Magic Barn, circa 1936, former sculpture studio restored by community artists with old growth barn wood.",
            'address': "8569 Division St.",
            'city': "Baton Rouge",
            'state': "Mississippi",
            'image': "ggredgg",
            'price': 31,
            'rating': 2,
            'owner_id': 4
        },
        {             
            'property_name': "Another Empty Lot",
            'description': "its still really just an empty lot",
            'address': "2 Wrong Way.",
            'city': "Allentown",
            'state': "Pennsylvania",
            'image': "ggredgg",
            'price': 15,
            'rating': 2,
            'owner_id': 4
        },
        {             
            'property_name': "Nature Lover's Retreat",
            'description': "Discover the charm of a tiny house in a magical setting. ",
            'address': "424 Woodland Street",
            'city': "Asheville",
            'state': "North Carolina",
            'image': "ggredgg",
            'price': 29,
            'rating': 2,
            'owner_id': 1
        },

          

      ]);
    // });
};
