'use strict';
const fs = require("fs")

function readFile(){
  return new Promise(function(resolve, reject){
    fs.readFile('./contacts.csv', 'utf8', function(err, data){
      if(err){
        reject(err)
      } else{
        resolve(data.split("\n"))
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
      return readFile()
      .then(data =>{
        let arrData = []
        
        
        for(let i = 0; i < data.length; i++){
          let splitData = data[i].split(',')
          arrData.push({name: splitData[1], email: splitData[2], phone: splitData[3], createdAt: new Date(), updatedAt: new Date()})
        }

        return queryInterface.bulkInsert('Contacts', arrData, {})

      })
      .catch(err => {
        console.log(err)
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:2
      */
     return queryInterface.bulkDelete('Contacts', null, {});
  }
};
