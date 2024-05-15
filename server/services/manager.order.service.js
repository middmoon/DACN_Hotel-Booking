"use strict";

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const HotelManagerService = require("./hotel.manager.service");

class ManagerOrderService {
  static async getAllOrder(userId) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const orderList = await db.Order.findAll({
      where: {
        id_hotel: hotelId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      // include: [
      //   {
      //     model: db.Room,
      //     through: {
      //       model: db.RoomOrder,
      //       //attributes: [],
      //     },
      //   },
      // ],
    });

    if (!orderList) {
      throw new NotFoundError("ERR: Can not get your orders");
    }

    if (orderList) {
      return {
        orders: orderList,
      };
    }
  }

  static async getDetailOrder(userId, orderId) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findOne({
      where: {
        _id: orderId,
        id_hotel: hotelId,
      },
      include: [
        {
          model: db.Room,
          through: {
            model: db.RoomOrder,
            attributes: [],
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!foundOrder) {
      throw new NotFoundError("Error: Can not get order detail");
    }

    return {
      foundOrder,
    };
  }

  static async getOrderWithStatus(userId, status) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const foundOrder = await db.Order.findAll({
      where: {
        id_hotel: hotelId,
        status: status,
      },
    });

    if (!foundOrder) {
      throw new BadRequestError("Error: Can not get order with status");
    }

    return {
      orders: foundOrder,
    };
  }

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

  static async addRoomToOrder(userId, orderId, payload) {
    const transaction = await db.sequelize.transaction();

    try {
      const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

      // Find the order
      let foundOrder = await db.Order.findOne({
        where: { _id: orderId, id_hotel: hotelId },
        transaction,
      });

      if (!foundOrder) {
        throw new NotFoundError("ERR: Cannot find order for your hotel");
      }

      if (foundOrder.status === "PRE_ORDER") {
        foundOrder = await foundOrder.update(
          { status: "ON_ORDER" },
          { transaction }
        );
      }

      let room = await db.Room.findOne({
        where: { _id: payload.id_room },
        transaction,
      });

      if (!room) {
        throw new NotFoundError("ERR: Room not found");
      }

      if (!room.is_ordered) {
        await room.update({ is_ordered: true }, { transaction });
      }

      const newRoomOrder = await db.RoomOrder.create(
        {
          id_order: orderId,
          id_room: payload.id_room,
          start_day: payload.start_day,
          end_day: payload.end_day,
          total_price: payload.total_price,
        },
        { transaction }
      );

      if (!newRoomOrder) {
        throw new NotFoundError("ERR: Cannot create Room Order");
      }

      await transaction.commit();

      return { newRoomOrder };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = ManagerOrderService;
