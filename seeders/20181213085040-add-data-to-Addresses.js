'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = fs.readFileSync("./addresses.csv", "utf8")
    let data1 = data.split('\n')
    let insertData = []
    data1.forEach(element => {
      let newdata = element.split(",").slice(1)
      let address = {
        street:newdata[0],
        city: newdata[1],
        zip_code:newdata[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      insertData.push(address)
    })

    return queryInterface.bulkInsert("Addresses", insertData)
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Addresses", null, {});
  }
};


