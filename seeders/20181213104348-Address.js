'use strict';
const fs = require('fs');

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
    var file = fs.readFileSync('./addresses.csv','utf8');
    var arrFile = file.split('\n');
    var result = [];
    for (var i = 0; i < arrFile.length; i++) {
      var data = arrFile[i].split(',');
      var obj ={
        street : data[1],
        city : data[2],
        zip_code : data[3],
        createdAt : new Date(),
        updatedAt : new Date()
      }
      result.push(obj)
    }
    return queryInterface.bulkInsert('Addresses', result);
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
