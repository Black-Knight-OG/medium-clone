'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    storyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.Story, {
      foreignKey: 'storyId'
    })
    Like.belongsTo(models.User, {
      foreignKey: 'usersId'
    })
  };

  return Like;
};
