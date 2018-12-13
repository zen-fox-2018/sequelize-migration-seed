'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    emai: DataTypes.STRING,
    phone_type: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};