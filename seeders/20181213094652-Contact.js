'use strict';
const fs = require('fs');


// var file = fs.readFileSync('./contacts.csv','utf8');
// var arrFile = file.split('\n');
// var result = [];
// for (var i = 0; i < arrFile.length-1; i++) {
//   var data = arrFile[i].split(',');
//   var obj ={
//     name : data[1],
//     email : data[2],
//     telephone : data[3],
//     createdAt : new Date(),
//     updatedAt : new Date()
//   }
//   result.push(obj)
// }
// console.log(result);
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
    var file = fs.readFileSync('./contacts.csv','utf8');
    var arrFile = file.split('\n');
    var result = [];
    for (var i = 0; i < arrFile.length; i++) {
      var data = arrFile[i].split(',');
      var obj ={
        name : data[1],
        email : data[2],
        telephone : data[3],
        createdAt : new Date(),
        updatedAt : new Date()
      }
      result.push(obj)
    }
    return queryInterface.bulkInsert('Contacts', result);
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
