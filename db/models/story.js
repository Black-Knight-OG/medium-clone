'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    imgUrl: DataTypes.STRING,
    storyContent: DataTypes.TEXT,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.User, {
      foreignKey: "userId",
    })
    Story.hasMany(models.Comment, {
      foreignKey: "storyId"
    })
    Story.hasMany(models.Like, {
      foreignKey: "storyId"
    })
    Story.hasMany(models.Bookmark, {
      foreignKey: "storyId"
    })
  };
  return Story;
};
