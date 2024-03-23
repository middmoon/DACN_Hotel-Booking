"use strict";

const { NotFoundError } = require("../core/error.response");
const db = require("../models");

const Utility = db.Utility;

class UtilityService {
  static async create() {
    const foundUtility = await Utility.findOne();

    if (!foundUtility) {
      throw new NotFoundError("Error: Can not find utilities");
    }

    if (foundUtility) {
      console.log(foundUtility);
      return {
        utility: foundUtility,
      };
    }

    return null;
  }

  static async delete() {
    const foundUtilities = await Utility.findOne();

    if (!foundUtilities) {
      throw new NotFoundError("Error: Can not find utilities");
    }

    if (foundUtilities) {
      console.log(foundUtilities);
      return {
        utility: foundUtilities,
      };
    }

    return null;
  }

  static async update() {
    const foundUtilities = await Utility.findOne();

    if (!foundUtilities) {
      throw new NotFoundError("Error: Can not find utilities");
    }

    if (foundUtilities) {
      console.log(foundUtilities);
      return {
        utility: foundUtilities,
      };
    }

    return null;
  }

  static async getOne() {
    const foundUtilities = await Utility.findOne();

    if (!foundUtilities) {
      throw new NotFoundError("Error: Can not find utilities");
    }

    if (foundUtilities) {
      console.log(foundUtilities);
      return {
        utility: foundUtilities,
      };
    }

    return null;
  }

  static async getAll() {
    const foundUtilities = await Utility.findOne();

    if (!foundUtilities) {
      throw new NotFoundError("Error: Can not find utilities");
    }

    if (foundUtilities) {
      console.log(foundUtilities);
      return {
        utility: foundUtilities,
      };
    }

    return null;
  }
}

module.exports = UtilityService;
