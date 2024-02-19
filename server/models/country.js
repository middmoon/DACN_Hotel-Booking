"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Country.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "_id",
      },
      country_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Country",
      tableName: "country",
      timestamps: true,
    }
  );
  return Country;
};
