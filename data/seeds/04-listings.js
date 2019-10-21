exports.seed = function(knex) {
    // Deletes ALL existing entries
    // return knex('listings').truncate()
    //   .then(function () {
        // Inserts seed entries
        return knex('listings').insert([
    
            {
                'amenity_id': 1,
                'property_id': 1
            },
            
            {
                'amenity_id': 2,
                'property_id': 1,
            }, 

            {
                'amenity_id': 3,
                'property_id': 1
            },

            {
                'amenity_id': 5,
                'property_id': 1,
            },

            {
                'amenity_id': 1,
                'property_id': 2,
            },

            {
                'amenity_id': 2,
                'property_id': 2
            },
            
            {
                'amenity_id': 3,
                'property_id': 2,
            }, 

            {
                'amenity_id': 4,
                'property_id': 2
            },

            {
                'amenity_id': 5,
                'property_id': 2,
            },

            {
                'amenity_id': 1,
                'property_id': 3,
            },
            
            {
                'amenity_id': 2,
                'property_id': 3
            },
            
            {
                'amenity_id': 3,
                'property_id': 3,
            }, 
            {
                'amenity_id': 4,
                'property_id': 3
            },
            {
                'amenity_id': 1,
                'property_id': 4,
            },
            {
                'amenity_id': 2,
                'property_id':4,
            },
            {
                'amenity_id': 5,
                'property_id': 4
            },
            
  
        ]);
    //   });
  };