"use strict";

const db = require("../models");
const { BadRequestError } = require("../core/error.response");
const AccessService = require("./access.service");
const { getInfoData } = require("../utils");

require("dotenv").config();

class HotelService {
  static async registerHotel(payload, role = "HOTEL_MANAGER") {
    // sign up manager
    const newManager = await AccessService.signUp(
      { email: payload.email, password: payload.password },
      role
    );

    console.log(newManager);

    // register hotel

    if (!newManager) {
      throw new BadRequestError("Error: Can not register hotel");
    }

    const newHotel = await db.Hotel.create({
      id_manager: newManager.user._id,
      hotel_name: payload.hotel_name,
      house_number: payload.house_number,
      street_name: payload.street_name,
      code_ward: payload.ward_code,
      status: "ACTIVE",
    });

    if (newHotel) {
      return {
        manager: newManager,
        hotel: getInfoData({
          fields: ["_id", "status"],
          object: newHotel,
        }),
      };
    }

    // console.log(payload);

    // return {
    //   manager: {
    //     email: payload.email,
    //     password: payload.password,
    //   },
    //   hotel: {
    //     hotel_name: payload.hotel_name,
    //     house_number: payload.house_number,
    //     street_name: payload.street_name,
    //     ward_code: payload.ward_code,
    //   },
    // };
  }

  static async updateHotelInfo() {}

  static async deleteHotelInfo() {}
}

module.exports = HotelService;
