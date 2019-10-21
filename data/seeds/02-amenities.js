exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('amenities').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('amenities').insert([
    
            {
                'name': 'Water Hookups',
                'icon': 'https://image.flaticon.com/icons/svg/1415/1415545.svg',
            },
            
            {
                'name': 'Electricity',
                'icon': 'https://image.flaticon.com/icons/svg/616/616494.svg',
            },
            
            {
                'name': 'Restrooms',
                'icon': 'https://image.flaticon.com/icons/svg/2133/2133685.svg',
            },

            {
                'name': 'Pets',
                'icon': 'https://image.flaticon.com/icons/svg/1076/1076928.svg',
            },

            {
                'name': 'Campfire',
                'icon': 'https://image.flaticon.com/icons/svg/2151/2151891.svg',
            },
  
        ]);
      });
  };