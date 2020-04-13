
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments('id').primary();
      table.string('username', 128).unique().notNullable();
      table.string('password', )
  })
  .createTable('clothesOnSale', table => {
      table.increments('id');
      table.string('seller').references('username').inTable('users');
      table.string('brand').notNullable();
      table.string('condition').notNullable();
      table.string('itemType').notNullable();
      table.varchar('size').notNullable();
      table.string('description');
      table.string('image').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('clothesOnSale')
};
