'use strict';

const fs = require ('fs')
function read () {
  return new Promise (function(resolve, reject) {
    fs.readFile('./contacts.csv', 'utf8', function(err, data){
      if(err){
        reject(err)
      }else {
        let result = []
        let splitData = data.split('\n')
        for(let i = 0 ; i < splitData.length; i++) {
            let dataReady = splitData[i].split(',')
            let obj = {name: dataReady[1], email:dataReady[2], phone:dataReady[3], createdAt: new Date(), updatedAt:new Date()}
            result.push(obj)
        }
        resolve(result)
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
   return read()
          .then (function(data) {
            return queryInterface.bulkInsert('Contacts', data,{})
          })
          .catch (function(err) {
            throw err
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
