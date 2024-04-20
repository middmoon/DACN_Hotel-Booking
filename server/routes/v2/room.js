"use strict";

const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const RoomController = require("../../controller/room.controller");

router
  .get("/", asyncHandler(RoomController.getAllRoom))
  .post("/add", asyncHandler(RoomController.addRoom))
  .patch("/update/:roomId", asyncHandler(RoomController.updateRoom));

module.exports = router;
