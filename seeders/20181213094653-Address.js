'use strict';
const fs = require('fs')
const addressFile = fs.readFileSync('addresses.csv','utf8')
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
   let splitData = addressFile.split('\n')
   let dataInArray = []
   for (let i = 0; i <= splitData.length-1; i++) {
     let splitComa = splitData[i].split(',')
     let data = {
        street: splitComa[1],
        city: splitComa[2],
        zip_code: splitComa[3],
        createdAt: new Date(),
        updatedAt: new Date()
     }
     dataInArray.push(data)
   }
   return queryInterface.bulkInsert('Addresses', dataInArray)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
