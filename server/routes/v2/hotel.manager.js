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

  // Auth method
  .use(verifyToken)
  .use(verifyHotelAuth)
  .get("/get-info", asyncHandler(HotelManagerController.getInfo))
  .post(
    "/upload-images",
    multer.array("images"),
    asyncHandler(HotelManagerController.uploadImages)
  );

module.exports = router;
