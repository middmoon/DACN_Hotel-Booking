"use strict";

const { OK } = require("../core/success.response");
const HotelService = require("../services/hotel.service");

class HotelController {
  registerHotel = async (req, res, next) => {
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelService.registerHotel(req.body),
    }).send(res);
  };
}

module.exports = new HotelController();
