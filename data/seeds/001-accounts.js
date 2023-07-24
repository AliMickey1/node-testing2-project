
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bored').del()
    .then(function () {
      // Inserts seed entries
      return knex('bored').insert([
        {activity: 'Read a book', type: 'Educational', people: '1', free: true},
        {activity: 'Play a family board game', type: 'Social', people: 'family', free: false},
        {activity: 'Have a paint party', type: 'Social', people: 'varied', free: false}
      ]);
    });
};
