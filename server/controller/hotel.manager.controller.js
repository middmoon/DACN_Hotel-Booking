"use strict";

const { OK } = require("../core/success.response");
const HotelManagerService = require("../services/hotel.manager.service");
const RoomService = require("../services/room.service");

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
    new OK({
      message: "create new Hotel with a Manager OK",
      metadata: await HotelManagerService.uploadImages(req._id, req.files),
    }).send(res);
  };

  getUtilityList = async (req, res, next) => {
    new OK({
      message: "Get Utility List OK",
      metadata: await HotelManagerService.getUtilityList(),
    }).send(res);
  };

  addUtility = async (req, res, next) => {
    new OK({
      message: "Add Utility List OK",
      metadata: await HotelManagerService.addUtility(req._id, req.body),
    }).send(res);
  };

  addRoom = async (req, res, next) => {
    new OK({
      message: "Add Room OK",
      metadata: await RoomService.addRoom(req._id, req.body),
    }).send(res);
  };

  updateRoom = async (req, res, next) => {
    new OK({
      message: "update Room OK",
      metadata: await RoomService.updateRoom(
        req._id,
        req.params.roomId,
        req.body
      ),
    }).se;
  };
}

module.exports = new HotelController();
