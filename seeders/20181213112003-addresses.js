'use strict';

const fs = require('fs')

function readFile () {
  return new Promise((resolve,reject) => {
    fs.readFile('./addresses.csv','utf-8',(err,data) => {
      if(err){
        reject(err)
      } else {
        
        let result = []
        let newdata = data.split('\n')
        for(let i = 0; i < newdata.length; i++){
            let obj = {}
            let dataraw = newdata[i].split(',')
            obj.street = dataraw[1]
            obj.city = dataraw[2]
            obj.zip_code = dataraw[3]
            obj.createdAt = new Date
            obj.updatedAt = new Date
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
       return readFile ()
        .then ((data) => {
          return queryInterface.bulkInsert('addresses',data)
        })
        .catch((err)=> {
          console.log(err)
        })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
