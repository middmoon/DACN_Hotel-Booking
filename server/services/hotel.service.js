"use strict";

const db = require("../models");
const { BadRequestError } = require("../core/error.response");

const AccessService = require("./access.service");
const { getInfoData } = require("../utils");

require("dotenv").config();

class HotelService {
  static async registerHotel(payload, role = "HOTEL_MANAGER") {
    console.log(payload);
    console.log(role);
    return {
      manager: {
        email: payload.email,
        password: payload.password,
      },
      hotel: {
        hotel_name: payload.hotel_name,
        street_name: payload.street_name,
      },
    };

    // // sign up manager
    // const newManager = await AccessService.signUp(
    //   { email: payload.email, password: payload.password },
    //   role
    // );

    // console.log(newManager);

    // // register hotel

    // if (!newManager) {
    //   throw new BadRequestError("Error: Can not register hotel");
    // }

    // const newHotel = await db.Hotel.create({
    //   id_manager: newManager._id,
    //   hotel_name: payload.hotel_name,
    //   house_number: payload.house_number,
    //   street_name: payload.street_name,
    //   code_ward: payload.code_ward,
    //   status: "ACTIVE",
    // });

    // if (newHotel) {
    //   return {
    //     manager: getInfoData({
    //       fields: ["_id", "email", "role"],
    //       object: newManager,
    //     }),
    //     hotel: newHotel,
    //   };
    // }

    // return null;
  }

  static async updateHotelInfo() {}

  static async deleteHotelInfo() {}
}

module.exports = HotelService;
