'use strict';

const fs = require('fs')

function readFile() {
  let address = fs.readFileSync('./addresses.csv', 'utf8')
  // console.log(address.split('\n'))
  let processedAdd = address.split('\n')
  let arrayAdd = []
  for (let i = 0; i < processedAdd.length; i++) {
    let singleProcessed = processedAdd[i].split(',')
    arrayAdd.push({
      street:singleProcessed[1],
      city:singleProcessed[2],
      zip_code:singleProcessed[3],
      createdAt:new Date(),
      updatedAt:new Date()
    })
  }
return arrayAdd
}
// console.log(readFile())
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
   return queryInterface.bulkInsert('Addresses', readFile(), {});
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
