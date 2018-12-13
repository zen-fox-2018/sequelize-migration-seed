'use strict';



const fs = require('fs')

function readFile () {
  return new Promise((resolve,reject) => {
    fs.readFile('./contacts.csv','utf-8',(err,data) => {
      if(err){
        reject(err)
      } else {
        
        let result = []
        let newdata = data.split('\n')
        for(let i = 0; i < newdata.length; i++){
            let obj = {}
            let dataraw = newdata[i].split(',')
            obj.name = dataraw[1]
            obj.email = dataraw[2]
            obj.phone = dataraw[3]
            obj.createdAt = new Date
            obj.updatedAt = new Date
            result.push(obj)
        }

        resolve(result)
      }
    })
  })
 


}

  // readFile()
  //      .then((data) => {
  //        console.log(data)
  //      //  return queryInterface.bulkInsert('contacts', data, {})
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return readFile()
        .then((data) => {
                  return queryInterface.bulkInsert('contacts', data)      
            })
        .catch((err) => {
            console.log(err)
            })
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
