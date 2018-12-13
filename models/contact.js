'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};