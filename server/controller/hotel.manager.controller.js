"use strict";

const { OK } = require("../core/success.response");
const HotelManagerService = require("../services/hotel.manager.service");
const HotelService = require("../services/hotel.service");

class HotelController {
  registerHotel = async (req, res, next) => {
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelManagerService.registerHotel(req.body),
    }).send(res);
  };

  getInfo = async (req, res, next) => {
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelManagerService.getInfo(req._id),
    }).send(res);
  };

  uploadImages = async (req, res, next) => {
    console.log(`req.files--------------------------`);

    console.log(req.files);
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelManagerService.uploadImages(req._id, req.files),
    }).send(res);
  };
}

module.exports = new HotelController();
