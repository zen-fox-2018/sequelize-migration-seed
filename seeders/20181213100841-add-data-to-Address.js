'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
    let contacts = data.map(contact => {
      contact = contact.split(',')
      return {
        street: contact[1],
        city: contact[2],
        zip_code: contact[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
     return queryInterface.bulkInsert('Addresses', contacts, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
