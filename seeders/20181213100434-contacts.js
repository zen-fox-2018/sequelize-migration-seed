'use strict';

const fs = require('fs')

function readFile() {
  let contact = fs.readFileSync('./contacts.csv', 'utf8')
  console.log(contact.split('\n'))
  let processedContact = contact.split('\n')
  let arrayContact = []
  for (let i = 0; i < processedContact.length; i++) {
    let singleProcessed = processedContact[i].split(',')
    arrayContact.push({
      name:singleProcessed[1],
      email:singleProcessed[2],
      phone:singleProcessed[3],
      createdAt:new Date(),
      updatedAt:new Date()
    })
  }
return arrayContact
}

// function readFile() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./contacts.csv', function (err, data) {
//       if (err) {
//         reject(err)
//       }
//       else {
//         let processedContact = data.split("\n")
//         let arrayContact = []
//         for (let i = 0; i < processedContact.length; i++) {
//           let singleProcessed = processedContact[i].split(',')
//           arrayContact.push({
//             name: singleProcessed[1],
//             email: singleProcessed[2],
//             phone: singleProcessed[3],
//             createdAt: new Date(),
//             updatedAt: new Date()
//           })
//         }
//         resolve(arrayContact)
//       }
//     })
//   })
// }
// console.log(arrayContact)


// readFile()

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }, {

      }], {});
    */
   return queryInterface.bulkInsert('Contacts',readFile(), {});


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
