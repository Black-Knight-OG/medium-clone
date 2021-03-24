'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      hashedPassword: {
        type: Sequelize.STRING,
        allowNull:false
      },
      gender: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      profilePicture: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
