'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync("./contacts.csv", "utf8")
    let data1 = data.split('\n')
    let insertData = []
    data1.forEach(element => {
      let newdata = element.split(',').slice(1)
      let contact = {
        name: newdata[0],
        email: newdata[1],
        phone: newdata[2],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      insertData.push(contact)
    })
    return queryInterface.bulkInsert("Contacts", insertData)
  },
  
  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};

