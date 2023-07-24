
exports.up = function(knex) {
    return knex.schema
      .createTable('bored', tbl => {
          tbl.increments('activity_id')
          tbl.text('activity').notNullable()
          tbl.text('type').notNullable()
          tbl.string('people').notNullable()
          tbl.boolean('free')
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('bored')
  };
  