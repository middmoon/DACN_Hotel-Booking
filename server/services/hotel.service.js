"use strict";

const AccessService = require("./access.service");

require("dotenv").config();

class HotelService {
  static async registerHotel({ email, password }, role = "HOTEL_MANAGER") {
    AccessService.signUp({ email: email, password: password }, role);
  }

  static async updateHotelInfo() {}

  static async deleteHotelInfo() {}
}

module.exports = HotelService;
