exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('users').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
  
        {
          'first_name': "Clare",
          'last_name': "Smithson",
          'email': "clare@gmail.com",
          'username': "CSmithson",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/Mk5JH9n"
          },
          
          {
          'first_name': "Marcus",
          'last_name': "Mason",
          'email': "marcus@gmail.com",
          'username': "MMason",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/0JrgYff"
          },
          
          
          
          {
          'first_name': "Jason",
          'last_name': "LaFlamme",
          'email': "jason@gmail.com",
          'username': "JLaFlamme",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/HDJsLzJ"
          },
          
          {
          'first_name': "Tina",
          'last_name': "Charles",
          'email': "tina@gmail.com",
          'username': "TCharles",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/tbd9mmb"
          },
          
          {
          'first_name': "Mama",
          'last_name': "Lopez",
          'email': "mama@gmail.com",
          'username': "Mama",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/dpxWLsc"
          },
          
          {
          'first_name': "Matty",
          'last_name': "Sloan",
          'email': "matty@gmail.com",
          'username': "MSloan",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/4SGn2Hv"
          },
          
          {
          'first_name': "David",
          'last_name': "Mumm",
          'email': "david@gmail.com",
          'username': "DMumm",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/YcVg0nP"
          },
          
          {
          'first_name': "Ajit",
          'last_name': "Khan",
          'email': "ajit@gmail.com",
          'username': "AKhan",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/jVPN3NL"
          },
          
          {
          'first_name': "Hana",
          'last_name': "Stone",
          'email': "hana@gmail.com",
          'username': "HStone",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/kqL15v5"
          },
          
          {
          'first_name': "Coco",
          'last_name': "Pérez",
          'email': "coco@gmail.com",
          'username': "CPerez",
          'password': "qwerty",
          'owner': true,
          'avatar': "https://ibb.co/DkhSpQM"
          },

      ]);
    // });
};