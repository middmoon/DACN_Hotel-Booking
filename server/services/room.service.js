"use strict";

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const HotelManagerService = require("./hotel.manager.service");

class RoomService {
  static async getAllRoom(userId) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const hotelList = await db.Room.findAll({
      where: {
        id_hotel: hotelId,
      },
    });

    if (!hotelList) {
      throw new NotFoundError("Error: Can not find you hotel list");
    }

    return hotelList;
  }

  static async addRoom(userId, payload) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const addedRoom = await db.Room.create({
      id_hotel: hotelId,
      room_number: payload.room_number,
      is_ordered: false,
      price: payload.price,
      type_name: payload.type_name,
    });

    if (!addedRoom) {
      throw new BadRequestError("ERR: Can not add room for your hotel");
    }

    if (addedRoom) {
      return {
        room: addedRoom,
      };
    }
  }

  static async updateRoom(userId, roomId, payload) {
    const hotelId = await HotelManagerService.getHotelIdForOwner(userId);

    const room = await db.Room.findOne({
      where: { _id: roomId, id_hotel: hotelId },
    });

    if (!room) {
      throw new BadRequestError("ERR: Can not update room for your hotel");
    }

    const updatedRoom = await room.update({
      room_number: payload.room_number,
      price: payload.price,
      is_ordered: payload.is_ordered,
    });

    return {
      updatedRoom,
    };
  }
}

module.exports = RoomService;
