'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let rawData = fs.readFileSync('./addresses.csv', 'utf8')
    let splitData = rawData.split('\n')
    let data = []
    for (let i = 0; i < splitData.length; i++) {
      let x = splitData[i].split(',')
      let obj = {
        street: x[1],
        city: x[2],
        zip_code: x[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      data.push(obj)
    }

    return queryInterface.bulkInsert('Addresses', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null, {});
  }
};
