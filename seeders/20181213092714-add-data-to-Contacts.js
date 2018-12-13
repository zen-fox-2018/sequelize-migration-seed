'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
    let contacts = data.map(contact => {
      contact = contact.split(',')
      return {
        name: contact[1],
        email: contact[2],
        phone: contact[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
     return queryInterface.bulkInsert('Contacts', contacts, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
