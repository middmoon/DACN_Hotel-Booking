"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      // Define associations here if needed
      Rating.belongsTo(models.Hotel, { foreignKey: "id_hotel" });
      Rating.belongsTo(models.User, { foreignKey: "id_user" });
    }
  }

  Rating.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_hotel: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "Hotel",
        //   key: "_id",
        // },
      },
      id_user: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: "User",
        //   key: "_id",
        // },
      },
      comment: {
        type: DataTypes.STRING,
      },
      rating_point: {
        type: DataTypes.INTEGER,
      },
    },

    {
      sequelize,
      modelName: "Rating",
      tableName: "rating",
      timestamps: true,
    }
  );

  return Rating;
};
