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
        // references: {
        //   model: "Hotel",
        //   key: "_id",
        // },
      },
      id_utility: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Utility",
        //   key: "_id",
        // },
      },
    },
    {
      sequelize,
      modelName: "HotelUtility",
      tableName: "hotel_utility",
      timestamps: true,
    }
  );

  return HotelUtility;
};
