'use strict';
const fs = require('fs')
const readFile = fs.readFileSync('./contacts.csv', 'utf8').split('\n')

function readFileContact () {
  let dataCt = []
  readFile.forEach(data => {
    dataCt.push(data.split(','))
  })

  let hasil = []
  for(let i = 0; i < dataCt.length; i++) {
    let obj = {}
    for(let j = 1; j < dataCt[i].length; j++) {
      obj.name = dataCt[i][1]
      obj.email = dataCt[i][2]
      obj.phone = dataCt[i][3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
    }
    hasil.push(obj)
  }
  return hasil
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = readFileContact()
    return queryInterface.bulkInsert("Contacts", data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Contacts", null, {})
  }
};
