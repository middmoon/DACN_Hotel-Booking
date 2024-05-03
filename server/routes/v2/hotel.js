const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HotelController = require("../../controller/hotel.controller");

router
  .get("/", asyncHandler(HotelController.getHotelList))
  .get("/:_id", asyncHandler(HotelController.getHotelInfo));

module.exports = router;
