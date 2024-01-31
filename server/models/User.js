const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
      unique: true,
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
      references: {
        model: "Street",
        key: "_id",
      },
    },
    id_ward: {
      type: DataTypes.INTEGER,
      references: {
        model: "Ward",
        key: "_id",
      },
    },
    house_number: {
      type: DataTypes.INTEGER,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
  });

  return User;
};
