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
   let rawData = fs.readFileSync('./contacts.csv', 'utf8')
   let splitData = rawData.split('\n')
   let data = []
   for (let i = 0; i < splitData.length; i++) {
       let x = splitData[i].split(',')
       let obj = {
           name: x[1],
           email: x[2],
           phone: x[3],
           createdAt: new Date(),
           updatedAt:  new Date()
       }
       data.push(obj)
   }

   return queryInterface.bulkInsert('Contacts', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
