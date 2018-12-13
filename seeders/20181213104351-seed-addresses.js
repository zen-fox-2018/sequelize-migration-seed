'use strict';
const fs = require('fs');

function readFile() {
  return new Promise((resolve, reject) => {

    fs.readFile('./addresses.csv', 'utf8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return readFile()
      .then((dataAddress) => {

        let data = dataAddress.split('\n');
        let res = [];

        for (let i = 0; i < data.length; i++) {
          let cvtData = data[i].split(',');
          let objData = {}

          objData.street = cvtData[1];
          objData.city = cvtData[2];
          objData.zip_code = cvtData[3];
          objData.createdAt = new Date();
          objData.updatedAt = new Date();
          
          res.push(objData);
        }

        return queryInterface.bulkInsert('Addresses', res);

      })
      .catch((err) => {
        throw err
      });

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Addresses', null);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
