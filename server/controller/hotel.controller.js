"use strict";

const { OK } = require("../core/success.response");
const HotelService = require("../services/hotel.service");

class HotelController {
  getHotelInfo = async (req, res, next) => {
    new OK({
      message: "get hotel info OK",
      metadata: await HotelService.getHotelInfo(req.params._id),
    }).send(res);
  };
}

module.exports = new HotelController();
