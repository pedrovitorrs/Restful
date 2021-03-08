"use strict";
const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize){
        super.init({
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
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                default: DataTypes.NOW,
            },
            updatedAt: DataTypes.DATE,
        }, {
            sequelize,
            modelName: 'clients',
            timestamps: true,
        }
    )};
}

module.exports = Client;