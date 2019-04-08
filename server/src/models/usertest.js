'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTest = sequelize.define('UserTest', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  UserTest.associate = function(models) {
    // associations can be defined here
  };
  return UserTest;
};