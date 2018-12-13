'use strict';
const fs = require('fs') 

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./contacts.csv', 'utf8').trim().split('\n').map(x => x.split(',')).map(y => y.slice(1))
    let result = []

    data.forEach(single => {
      result.push({
        name: single[0], email: single[1], phone: single[2], createdAt: new Date(), updatedAt: new Date()
      })
    })
    return queryInterface.bulkInsert('Contacts', result, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
