'use strict';
const fs = require('fs')

function readFileContact() {
  return new Promise( (resolve, reject) => {
    fs.readFile( './contacts.csv', 'utf8', (err, data) => {
      if (!err) {
        let output = []
        data.split('\n').map( a => a.split(',')).forEach( b => {
          if (b[0] !== ''){
            output.push({name : b[1],
              email : b[2],
              phone : b[3],
              createdAt : new Date(),
              updatedAt : new Date()
            })
          }
        })        
        resolve(output)
      } else {
        reject(err)
      }
    })
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return readFileContact()
      .then( output => {
        return queryInterface.bulkInsert('Contacts', output)
      })
      .catch( err => {
        throw err
      })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null)
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
