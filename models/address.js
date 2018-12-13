'use strict';
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define('address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  address.associate = function(models) {
    // associations can be defined here
  };
  return address;
};