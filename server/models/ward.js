"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ward.belongsTo(models.District, { foreignKey: "id_district" });
    }
  }
  Ward.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ward_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_district: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "District",
        //   key: "_id",
        // },
      },
    },
    {
      sequelize,
      modelName: "Ward",
      tableName: "ward",
      timestamps: true,
    }
  );

  return Ward;
};
