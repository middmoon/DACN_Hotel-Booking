"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      // Define associations here if needed
      Room.belongsTo(models.Hotel, { foreignKey: "id_hotel" });
    }
  }

  Room.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_hotel: {
        type: DataTypes.INTEGER,
      },
      room_number: {
        type: DataTypes.STRING,
      },
      is_ordered: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Room",
      tableName: "room",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Room;
};
