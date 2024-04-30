"use strict";

const db = require("../models");
const { NotFoundError } = require("../core/error.response");
const { getInfoData } = require("../utils");

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

  static async getAllOrder(userId) {
    const foundListOrder = await db.Order.findAll({
      where: {
        id_user: userId,
      },
    });

    if (!foundListOrder) {
      throw new NotFoundError("ERR: Can not find order detail for user");
    }

    return {
      foundListOrder,
    };
  }

  static async getOrderDetail(userId, orderId) {
    const foundOrder = await db.Order.findOne({
      where: {
        _id: orderId,
        id_user: userId,
      },
      include: [
        {
          model: db.RoomOrder,
          include: [db.Room],
        },
      ],
    });

    if (!foundOrder) {
      throw new NotFoundError("ERR: Can not find order detail for user");
    }

    return {
      foundOrder,
    };
  }

  // chua xong
  static async updateOrder(userId, orderId, payload) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findOne({
      where: { _id: orderId, id_hotel: hotelId },
    });

    if (!foundOrder) {
      throw new NotFoundError("ERR: Can not find order for your hotel");
    }

    const updateedOrder = await foundOrder.update({
      status: payload.status,
      total_price: payload.total_price,
      start_day: payload.start_day,
      end_day: payload.end_day,
      total_person: payload.total_person,
      total_room: payload.total_room,
    });

    if (!foundOrder) {
      throw new BadRequestError("ERR: Can not update order for your hotel");
    }

    return {
      updateedOrder,
    };
  }
  // chua xong
  static async cancelOrder(userId, orderId) {
    const foundOrder = await db.Order.findOne({
      where: {
        _id: orderId,
        id_user: userId,
      },
      include: [
        {
          model: db.RoomOrder,
          include: [db.Room],
        },
      ],
    });

    if (!foundOrder) {
      throw new NotFoundError("ERR: Can not find order detail for user");
    }

    const cancelOrder = await foundOrder.update({
      status: "CANCEL",
    });

    if (!cancelOrder) {
      throw new NotFoundError("ERR: Can not update order for user");
    }

    return {
      cancelOrder,
    };
  }
}

module.exports = UserOrderService;
