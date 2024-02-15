"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.belongsTo(models.Province, { foreignKey: "id_province" });
    }
  }
  District.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      district_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_province: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "Province",
        //   key: "_id",
        // },
      },
    },
    {
      sequelize,
      modelName: "District",
      tableName: "district",
      timestamps: true,
    }
  );

  return District;
};
