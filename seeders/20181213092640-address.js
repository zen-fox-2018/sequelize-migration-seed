'use strict';
const readData = require('../readFile');

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
    return new Promise((resolve, reject) => {
      let tampung = [];
      readData.readData('./addresses.csv')
      .then((rawData) => {
        rawData.forEach(address => {
          let newAddress = {
            street : address[1],
            city : address[2],
            zip_code : address[2],
            createdAt : new Date(),
            updatedAt : new Date()
          }
          tampung.push(newAddress);
        })
        tampung.splice(-1,1);
        resolve(queryInterface.bulkInsert('Addresses', tampung, {}));
      })

      .catch((err) => {
        reject(err);
      })
    })
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
