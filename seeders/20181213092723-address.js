'use strict';
const Setup = require('../Setup')

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
   
   return new Promise((resolve, reject )=> {
    let tempData = []
    Setup.getData('addresses.csv')
    .then(data=> {
        data.forEach(dataAddress => {
          let newData = {
            street: dataAddress[1],
            city: dataAddress[2],
            zip_code: dataAddress[3],
            createdAt: new Date(),
            updatedAt: new Date()
          }
          tempData.push(newData)
        });

        resolve(queryInterface.bulkInsert('Addresses', tempData), {})
    })
    .catch(err=>{
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
   return queryInterface.bulkDelete('Addresses', null,{})
  }
};
