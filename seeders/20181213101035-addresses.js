'use strict';
const fs = require('fs');
const files = fs.readFileSync('./addresses.csv', 'utf8');

function filesArr() {
  let datas = files.split('\n');
  let obj = [];
  for (let i = 0; i < datas.length; i++) {
    let split = datas[i].split(',');
    obj.push({street: split[1], city: split[2], code: split[3], createdAt:new Date(), updatedAt: new Date()});
  }
  return obj;
}
// filesArr();

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
   return queryInterface.bulkInsert('Addresses', filesArr(), {});
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
