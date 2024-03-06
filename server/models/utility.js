"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Utility extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Utility.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      utility_name: {
        type: DataTypes.STRING,
      },
      utility_icon: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Utility",
      tableName: "utility",
      timestamps: true,
    }
  );

  return Utility;
};
