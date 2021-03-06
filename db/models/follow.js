'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: DataTypes.INTEGER,
    followerId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
    Follow.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Follow.belongsTo(models.User, {
      foreignKey: 'followerId'
    })
  };
  return Follow;
};
