'use strict';
const fs = require('fs')

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (!err) {
        let fileSeeded = []
        let parseData = data.split('\n')
        for (let i = 0; i < parseData.length; i++) {
          let hasilParseData = parseData[i].split(',')
          let objPerData = {
            id: Number(hasilParseData[0]),
            name: hasilParseData[1],
            email: hasilParseData[2],
            phone: hasilParseData[3],
            createdAt: new Date(),
            updatedAt: new Date()
          }
          fileSeeded.push(objPerData)
        }
        resolve(fileSeeded)
      } else {
        reject(err)
      }
    }) 
  })
}

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
        readFile('./contacts.csv')
        .then((data) => {
          resolve(queryInterface.bulkInsert('Contacts', data), {});
        })
        .catch((err) => {
          reject(err)
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
