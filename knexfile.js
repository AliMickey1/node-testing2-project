// Update with your config settings.
const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...common,
    connection: {
      filename: './data/dev.sqlite',
    },
  },
  testing: {
    ...common,
    connection: {
      filename: './data/dev.db3',
    },
  },
  production: {

  },
};



// module.exports = {

//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './dev.sqlite3'
//     },

//   },
//       migrations:{
//       directory: './data/migrations',
//     },
//     seeds:{
//       directory: './data/seeds'
//     },
  // testing: {
  //   // ...common,
  //   connection: {
  //     filename: './data/test.db3',
  //   },

  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

// };
