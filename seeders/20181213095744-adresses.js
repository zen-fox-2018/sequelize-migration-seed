'use strict';
const fs = require("fs")

function readFile(){
  return new Promise(function(resolve, reject){
    fs.readFile('/home/aditya/Desktop/hacktiv8/phase-1/week-3/sequelize-migration-seed/addresses.csv', 'utf8', function(err, data){
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
       arrData.push({street: splitData[1], city: splitData[2], zip_code: splitData[3], createdAt: new Date(), updatedAt: new Date()})
     }

     return queryInterface.bulkInsert('Adresses', arrData, {})

   })
   .catch(err => {
     console.log(err)
   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Adresses', null, {});
    }
};
