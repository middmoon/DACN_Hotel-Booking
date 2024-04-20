"use strict";

const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const HotelController = require("../../controller/hotel.controller");
const HotelManagerController = require("../../controller/hotel.manager.controller");
const {
  verifyHotelAuth,
  verifyToken,
} = require("../../middleware/auth.middleware");

const multer = require("../../config/multer.config");

router
  .get("/", (req, res) => {
    res.send("hotel manager test api");
  })
  .post("/register", asyncHandler(HotelManagerController.registerHotel))
  .get("/get-utility-list", asyncHandler(HotelManagerController.getUtilityList))

  // Auth method
  .use(verifyToken)
  .use(verifyHotelAuth)
  .get("/get-info", asyncHandler(HotelManagerController.getInfo))
  .post("/add-utility", asyncHandler(HotelManagerController.addUtility))
  .post("/add-room", asyncHandler(HotelManagerController.addRoom))

  .post(
    "/upload-images",
    multer.array("images"),
    asyncHandler(HotelManagerController.uploadImages)
  )
  .use("/room", require("./room"));

module.exports = router;
