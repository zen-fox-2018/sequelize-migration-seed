'use strict';

const fs = require('fs')


function readFileAddress() {
  return new Promise( (resolve, reject) => {
    fs.readFile( './addresses.csv', 'utf8', (err, data) => {
      if (!err) {
        let output = []
        data.split('\n').map( a => a.split(',')).forEach( b => {
          if (b[0] !== ''){
            output.push({
              street : b[1],
              city : b[2],
              zip_code : b[3],
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
}1

module.exports = {
  up: (queryInterface, Sequelize) => {
    return readFileAddress()
      .then( (output) => {
        return queryInterface.bulkInsert('Addresses', output)
      })
      .catch( (err) =>{
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
    return queryInterface.bulkDelete('Addresses', null)
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};


