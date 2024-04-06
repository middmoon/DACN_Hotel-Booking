"use strict";

const { BadRequestError, NotFoundError } = require("../core/error.response");
const { OK } = require("../core/success.response");
const HotelService = require("../services/hotel.service");

const { getUserInfoById } = require("../services/user.service");

class HotelController {
  createHotel = async (req, res, next) => {
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelService.registerHotel(req.body),
    }).send(res);
  };
}

module.exports = new HotelController();
