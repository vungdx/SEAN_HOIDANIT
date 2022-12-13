"use strict";

const { DataTypes, QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  address: DataTypes.STRING,
  gender: DataTypes.STRING,
  roleId: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456", //plain text
        firstName: "admin",
        lastName: "admin",
        address: "address",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
