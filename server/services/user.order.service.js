"use strict";

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const HotelManagerService = require("./hotel.manager.service");

class UserOrderService {
  static async userMakeOrder(userId, payload) {
    const makedOrder = await db.Order.create({
      id_user: userId,
      id_hotel: payload.id_hotel,
      start_day: payload.start_day,
      end_day: payload.end_day,
      status: "PRE_ORDER",
      total_room: payload.total_room,
      total_price: payload.total_price,
      total_person: payload.total_person,
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

module.exports = UserOrderService;
