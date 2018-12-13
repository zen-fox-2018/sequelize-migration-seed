'use strict';
const fs = require(`fs`)

module.exports = {
  up: (queryInterface, Sequelize) => {
    let result = []
    let file = fs.readFileSync(`./contacts.csv`, `utf8`).split(`\n`)
    file = file.filter((e) => e != '')
    for (let i = 0; i < file.length; i++) {
      file[i] = file[i].split(`,`)
    }
    for (let i = 0; i < file.length; i++) {
      result.push({
        name: file[i][1],
        email: file[i][2],
        phone: file[i][3],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Contacts', result, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
