const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HotelController = require("../../controller/hotel.controller");
const hotelManagerController = require("../../controller/hotel.manager.controller");

router
  .get("/", (req, res) => {
    res.send("hotel test api");
  })
  .get("/:_id", asyncHandler(HotelController.getHotelInfo));

module.exports = router;
