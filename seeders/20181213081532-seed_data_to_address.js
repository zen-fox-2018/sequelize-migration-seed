'use strict';
const fs = require('fs')
const readFile = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
function readFileAddress() {
  let dataAd = []
  readFile.forEach(data => {
    dataAd.push(data.split(','))
  })
  
  let hasil = []
  for(let i = 0; i < dataAd.length; i++) {
    let obj = {}
    for(let j = 1; j < dataAd[i].length; j++) {
      obj.street = dataAd[i][1]
      obj.city = dataAd[i][2]
      obj.zip_code = dataAd[i][3]
      obj.createdAt = new Date()
      obj.updatedAt = new Date()
    }
    hasil.push(obj)
  }
  return hasil
}


module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = readFileAddress()
   return queryInterface.bulkInsert("Addresses", data)
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("Addresses", null, {})
  }
};
