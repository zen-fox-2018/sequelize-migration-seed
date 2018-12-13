'use strict';
const fs = require('fs') 
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./addresses.csv', 'utf8').trim().split('\n').map(x => x.split(',')).map(y => y.slice(1))
    let result = []
    
    data.forEach(single => {
      result.push({
        street: single[0], city: single[1], zip_code: single[2], createdAt: new Date(), updatedAt: new Date()
      })
    })
    return queryInterface.bulkInsert('Addresses', result, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
