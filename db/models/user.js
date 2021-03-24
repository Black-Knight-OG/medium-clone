'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    profilePicture: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Story, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Follow, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Follow, {
      foreignKey: 'followerId'
    })
    User.hasMany(models.Comment, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Like, {
      foreignKey:'userId'
    })
    User.hasMany(models.Bookmark, {
      foreignKey: 'userId'
    })
  };
  return User;
};
