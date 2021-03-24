'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookmarks', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookmarks', null, {});
  }
};
