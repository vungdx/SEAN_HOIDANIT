const { sequelize } = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return Promise.all([
      queryInterface.changeColumn("Users", "image", {
        type: Sequelize.BLOB,
        allowNull: true,
      }),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.changeColumn("Users", "image", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
};
