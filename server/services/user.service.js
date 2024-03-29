"use strict";

const { NotFoundError } = require("../core/error.response");
const db = require("../models");

const User = db.User;

class UserService {
  static async getUserInfoById(id_user) {
    const foundUser = await User.findOne({
      where: { _id: id_user },
      attributes: { exclude: ["password", "_id", "role"] },
      raw: true,
    });

    if (!foundUser) {
      throw new NotFoundError("Error: Can not find the user");
    }

    if (foundUser) {
      return {
        metadata: {
          user: foundUser,
        },
      };
    }

    return {
      metadata: null,
    };
  }
}

module.exports = UserService;
