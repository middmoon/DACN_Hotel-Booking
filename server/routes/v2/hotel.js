const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HotelController = require("../../controller/hotel.controller");

router
  .get("/", (req, res) => {
    res.send("hotel test api");
  })
  .post("/register", asyncHandler(HotelController.registerHotel));

// .get(
//   "/district/:province_code",
//   asyncHandler(AddressController.getDistrictsByProvinceCode)
// )
// .get(
//   "/ward/:district_code",
//   asyncHandler(AddressController.getWardsByDistrictCode)
// )
// .get("/test", (req, res) => {
//   res.send("TEST API V2 FOR ADDRESS");
// });

module.exports = router;
