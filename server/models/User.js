"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if needed
      User.belongsTo(models.Ward, { foreignKey: "id_ward" });
      User.belongsTo(models.Street, { foreignKey: "id_street" });
    }
  }

  User.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      user_display_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
      },
      user_gender: {
        type: DataTypes.ENUM("male", "female", "undefined", "secret"),
      },
      user_birthday: {
        type: DataTypes.DATE,
      },
      id_street: {
        type: DataTypes.INTEGER,
      },
      id_ward: {
        type: DataTypes.INTEGER,
      },
      house_number: {
        type: DataTypes.INTEGER,
      },
      postal_code: {
        type: DataTypes.STRING,
      },
      image_link: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM("ADMIN", "HOTEL_MANAGER", "USER"),
        defaultValue: "USER",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: true,
    }
  );

  return User;
};
