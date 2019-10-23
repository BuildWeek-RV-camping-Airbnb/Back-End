exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('properties').truncate()
//     .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
  
          {
              'property_name': "Underground Hygge",
              'description': "This inspired dwelling nestled right into the breathtaking Columbia River Gorge mountainside. Reverently framed by the iconic round doorway, the wondrous views will entrance your imagination and inspire an unforgettable journey. Every nook of this little habitation will warm your sole, every cranny will charm your expedition of repose. Up the pathway, tucked into the earth, an unbelievable adventure awaits!",
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
              'description': "Walking distance to the Mercedes-Benz Stadium, Georgia World Congress Center, State Farm/Phillips Arena, AmericasMart, Centennial Olympic Park, CNN Center, World of Coke and the Georgia Aquarium.",
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
            'description': "The Pleasant Bay Lookout is a private room with a spectacular view, nestled in the trees. Guests access our family's home (where we live full time) for kitchen, bathroom, living room, hot tub, and other household amenities. We feel fortunate to welcome guests to this tucked-away oasis of peace and beauty.",
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
            'description': "Guests will have access to The Palms Casino, Pearl theater, Restaurants/Buffet, IMAX Theater, Kaos Pool party’s, GhostBar Rooftop nightclub and much more.",
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
            'description': "Meeting accurate expectations is very important to us - we only accept requests from those with complete profiles who let us know they've read our entire listing description. Thank you!",
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
            'description': "Downtown, the best bit of Manhattan. One of, if not the, LARGEST space on Airbnb in NYC. Your Own PRIVATE Bathroom & PRIVATE Bedroom, a Terrace off the bedroom, near to subways/buses, restaurants, bars, real luxury right in the middle of things. Just read our 500+ 5-STAR REVIEWS and you will see why we are SUPER-HOSTS and why you will just love this place, like other guests, I promise.",
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
            'description': "The Pleasant Bay Lookout is a private room with a spectacular view, nestled in the trees. Guests access our family's home (where we live full time) for kitchen, bathroom, living room, hot tub, and other household amenities. We feel fortunate to welcome guests to this tucked-away oasis of peace and beauty.",
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
            'description': "Magic Barn, circa 1936, former sculpture studio restored by community artists with old growth barn wood, upcycled furnishings, kitchen, claw foot bath, baby amenities, with a sculpture garden.",
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
            'description': "Discover the charm of a tiny house in a magical setting. Every inch is put to good use in a delightful mix of old and new. Repurposed vintage cabinets and a claw-foot tub share this clever space with modern appliances and air conditioning. Featured in Travel+Leisure, Southern Living, House Beautiful, the Tennessean, and USA Today. Come stay in Tennessee's most wish-listed Airbnb! ",
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
