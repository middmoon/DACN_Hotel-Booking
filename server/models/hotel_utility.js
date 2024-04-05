"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class HotelUtility extends Model {
    static associate(models) {
      // Define associations here if needed
      HotelUtility.belongsTo(models.Hotel, { foreignKey: "id_hotel" });
      HotelUtility.belongsTo(models.Utility, { foreignKey: "id_utility" });
    }
  }

  HotelUtility.init(
    {
      id_hotel: {
        type: DataTypes.INTEGER,
      },
      id_utility: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "HotelUtility",
      tableName: "hotel_utility",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return HotelUtility;
};
