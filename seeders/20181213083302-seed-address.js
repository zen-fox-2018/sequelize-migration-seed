'use strict';
const fs = require(`fs`)
module.exports = {
  up: (queryInterface, Sequelize) => {
    let result = []
    let file = fs.readFileSync(`./addresses.csv`, `utf8`).split(`\n`)
    file = file.filter((e) => e != '')
    for (let i = 0; i < file.length; i++) {
      file[i] = file[i].split(`,`)
    }
    for (let i = 0; i < file.length; i++) {
      result.push({
        street: file[i][1],
        city: file[i][2],
        zip_code: file[i][3],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Addresses', result, {});
  },

  down: (queryInterface, Sequelize) => {
    
     return queryInterface.bulkDelete('Addresses', null, {});
    }
};
