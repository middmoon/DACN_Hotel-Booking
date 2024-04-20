"use strict";
const { OK } = require("../core/success.response");
const RoomService = require("../services/room.service");

class RoomController {
  getAllRoom = async (req, res, next) => {
    new OK({
      message: "Get All Room OK",
      metadata: await RoomService.getAllRoom(req._id),
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
    }).send(res);
  };
}

module.exports = new RoomController();
