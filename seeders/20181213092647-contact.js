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
    // id: DataTypes.INTEGER,
    // name: DataTypes.STRING,
    // emai: DataTypes.STRING,
    // phone_type: DataTypes.STRING
    return new Promise((resolve, reject )=> {
      let tempData = []
      Setup.getData('contacts.csv')
      .then(data=> {
          data.forEach(dataContact => {
            let newData = {
              name: dataContact[1],
              emai: dataContact[2],
              phone_type: dataContact[3],
              createdAt: new Date(),
              updatedAt: new Date()
            }
            tempData.push(newData)
          });

          resolve(queryInterface.bulkInsert('Contacts', tempData), {})
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
   return queryInterface.bulkDelete('Contacts',null , {} )
  }
};
