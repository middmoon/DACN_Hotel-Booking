"use strict";

require("dotenv").config();
const { where } = require("sequelize");
const { NotFoundError } = require("../core/error.response");
const db = require("../models");

const Province = db.Province;
const District = db.District;
const Ward = db.Ward;

class AddressService {
  static async getProvinces() {
    const province = await Province.findAll({ raw: true });
    if (!province) {
      throw new NotFoundError("Can not get provinces");
    } else {
      return { province };
    }
  }

  static async getDistrictsByProvinceCode(province_code) {
    const district = await District.findAll({
      where: { province_code: province_code },
      raw: true,
    });
    if (!district) {
      throw new NotFoundError("Can not get provinces");
    } else {
      return { district };
    }
  }

  static async getWardsByDistrictCode(district_code) {
    const ward = await Ward.findAll({
      where: { district_code: district_code },
      raw: true,
    });
    if (!ward) {
      throw new NotFoundError("Can not get Ward");
    } else {
      return { ward };
    }
  }
}

module.exports = AddressService;
