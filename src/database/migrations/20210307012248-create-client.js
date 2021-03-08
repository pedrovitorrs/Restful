'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clients', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            age: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            createdAt: {
              type: DataTypes.DATE,
            },
            updatedAt: {
              type: DataTypes.DATE,
            },
        }, {
          timestamps: true,
          createdAt: "createdAt",
          updatedAt: "updatedAt",
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('clients');
    }
}
