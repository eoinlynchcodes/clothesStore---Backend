
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clothesOnSale').del()
    .then(function () {
      // Inserts seed entries
      return knex('clothesOnSale').insert([
        { userID: 1, brand: 'Castelli', condition: 'Worn but Perfect', itemType: 'Cycling Jacket', size: 'M', description: 'With those pockets on the back everyone loves. Castelli are the A standard. Team Ineos use wear Castelli for a reason', image: 'imageURL.jpeg'}
      ]);
    });
};