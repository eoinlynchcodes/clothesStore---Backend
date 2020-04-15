
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clothesOnSale').del()
    .then(function () {
      // Inserts seed entries
      return knex('clothesOnSale').insert([
        { seller: 'eoinlynch', brand: 'Castelli', condition: 'Used but perfect', itemType: 'Cycling Jacket', size: 'M', description: 'With those pockets on the back everyone loves. Castelli are the A standard. Team Ineos use wear Castelli for a reason', image: 'imageURL.jpeg'}
      ]);
    });
};