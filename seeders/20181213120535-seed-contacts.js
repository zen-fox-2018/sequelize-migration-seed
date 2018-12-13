'use strict';
const fs = require('fs');

function readFile() {
  return new Promise((resolve, reject) => {

    fs.readFile('./contacts.csv', 'utf8', (err, data) => {
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
      .then((dataContacts) => {

        let data = dataContacts.split('\n');
        let res = [];

        for (let i = 0; i < data.length; i++) {
          let cvtData = data[i].split(',');
          let objData = {}

          objData.name = cvtData[1];
          objData.email = cvtData[2];
          objData.phone = cvtData[3];
          objData.createdAt = new Date();
          objData.updatedAt = new Date();

          res.push(objData);
        }

        return queryInterface.bulkInsert('Contacts', res);

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

    return queryInterface.bulkDelete('Contacts', null);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
