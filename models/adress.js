'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adress = sequelize.define('Adress', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Adress.associate = function(models) {
    // associations can be defined here
  };
  return Adress;
};