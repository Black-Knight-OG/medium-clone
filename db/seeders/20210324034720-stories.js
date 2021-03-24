'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Stories', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});

  }
};
