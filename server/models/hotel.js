"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // Define associations here if needed
      Hotel.belongsTo(models.Ward, { foreignKey: "id_ward" });
      Hotel.belongsTo(models.Street, { foreignKey: "id_street" });
      Hotel.belongsTo(models.User, { foreignKey: "id_manager" });
    }
  }

  Hotel.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_street: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Street",
        //   key: "_id",
        // },
      },
      id_ward: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Ward",
        //   key: "_id",
        // },
      },
      house_number: {
        type: DataTypes.INTEGER,
      },
      id_manager: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "User",
        //   key: "_id",
        // },
      },
    },
    {
      sequelize,
      modelName: "Hotel",
      tableName: "hotel",
      timestamps: true,
    }
  );

  return Hotel;
};
