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
      readData.readData('./contacts.csv')
      .then((rawData) => {
        let tampung = [];
        rawData.forEach(contact => {
          let newContact = {
            name : contact[1],
            email : contact[2],
            phone : contact[3],
            createdAt : new Date(),
            updatedAt : new Date()
          }
          tampung.push(newContact);
        })
        tampung.splice(-1,1);
        resolve(queryInterface.bulkInsert('Contacts', tampung, {}));
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
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
