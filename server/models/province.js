"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Province.belongsTo(models.Country, { foreignKey: "id_country" });
    }
  }
  Province.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      province_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_country: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "Country",
        //   key: "_id",
        // },
      },
    },
    {
      sequelize,
      modelName: "Province",
      tableName: "province",
      timestamps: true,
    }
  );

  return Province;
};
