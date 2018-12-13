'use strict';
const fs = require('fs')
const contactFile = fs.readFileSync('contacts.csv','utf8')

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
   let splitData = contactFile.split('\n')
   let dataInArray = []
   for (let i = 0; i <= splitData.length-1; i++) {
     let splitComa = splitData[i].split(',')
     let data = {
        name: splitComa[1],
        email: splitComa[2],
        phone: splitComa[3],
        createdAt: new Date(),
        updatedAt: new Date()
     }
     dataInArray.push(data)
   }
    return queryInterface.bulkInsert('Contacts', dataInArray);
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}

