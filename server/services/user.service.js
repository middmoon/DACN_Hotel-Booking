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
        user: foundUser,
      };
    }
  }

  static async updateUserInfo(id_user, payload) {
    const updatedUser = await User.update(
      { payload },
      {
        where: {
          _id: id_user,
        },
      }
    );

    if (!foundUser) {
      throw new NotFoundError("Error: Can not update this user");
    }

    if (foundUser) {
      return {
        user: updatedUser,
      };
    }
  }

  static async makeOrder(id_user, payload) {
    const makedOrder = await db.Order.create({
      id_user: id_user,
      id_hotel: payload.id_hotel,
      start_day: payload.start_day,
      end_day: payload.end_day,
      status: "PRE_ORDER",
      total_price: payload.total_price,
    });

    if (!makedOrder) {
      throw new NotFoundError("Error: Can make order");
    }

    if (makedOrder) {
      return {
        order: makedOrder,
      };
    }
  }
}

module.exports = UserService;
