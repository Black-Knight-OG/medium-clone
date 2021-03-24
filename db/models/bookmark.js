'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
    Bookmark.belongsTo(models.Story, {
      foreignKey: 'storyId'
    })
    Bookmark.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Bookmark;
};
