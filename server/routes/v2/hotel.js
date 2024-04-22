const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HotelController = require("../../controller/hotel.controller");
const hotelManagerController = require("../../controller/hotel.manager.controller");

router
  .get("/", asyncHandler(HotelController.searchHotel))
  .get("/:_id", asyncHandler(HotelController.getHotelInfo));

module.exports = router;
