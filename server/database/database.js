const path = require('path')

const dbPath = path.resolve(__dirname,'./database.sqlite')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

knex.schema
  .hasTable('TODOS')
    .then((exists) => {
      if (!exists) {
        return knex.schema.createTable('TODOS', (table)  => {
					table.increments('id').primary()
          table.string('username')
          table.string('title')
          table.string('description')
          table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        })
        .then(() => {
          console.log('Table \'TODOS\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })
knex.select('*').from('TODOS')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

module.exports = knex