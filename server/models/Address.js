const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Country = sequelize.define(
    "country",
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      country_name: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "country",
    }
  );

  const Province = sequelize.define(
    "province",
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      province_name: {
        type: DataTypes.TEXT,
      },
      id_country: {
        type: DataTypes.INTEGER,
        references: {
          model: "Country",
          key: "_id",
        },
      },
    },
    {
      tableName: "province",
    }
  );

  const District = sequelize.define(
    "district",
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      district_name: {
        type: DataTypes.TEXT,
      },
      id_province: {
        type: DataTypes.INTEGER,
        references: {
          model: "Province",
          key: "_id",
        },
      },
    },
    {
      tableName: "district",
    }
  );

  const Ward = sequelize.define(
    "ward",
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ward_name: {
        type: DataTypes.TEXT,
      },
      id_district: {
        type: DataTypes.INTEGER,
        references: {
          model: "District",
          key: "_id",
        },
      },
    },
    {
      tableName: "ward",
    }
  );

  const Street = sequelize.define(
    "street",
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      street_name: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "street",
    }
  );

  Country.associate = function (models) {
    Country.hasMany(models.Province, { foreignKey: "id_country" });
  };

  Province.associate = function (models) {
    Province.hasMany(models.District, { foreignKey: "id_province" });
  };

  District.associate = function (models) {
    District.hasMany(models.Ward, { foreignKey: "id_district" });
  };

  Ward.associate = function (models) {
    Ward.hasMany(models.User, { foreignKey: "id_ward" });
  };

  Street.associate = function (models) {
    Ward.hasMany(models.User, { foreignKey: "id_street" });
  };

  return {
    Country,
    Province,
    District,
    Ward,
    Street,
  };
};
