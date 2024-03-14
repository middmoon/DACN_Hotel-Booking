"use strict";

const express = require("express");
const asyncHandler = require("express-async-handler");
const AddressController = require("../../controller/address.controller");

const router = express.Router();

router.get("/province", asyncHandler(AddressController.getProvinces));
router.get(
  "/provinces/district/:province_code",
  asyncHandler(AddressController.getDistrictsByProvinceCode)
);
router.get(
  "/provinces/ward/:district_code",
  asyncHandler(AddressController.getWardsByDistrictCode)
);

module.exports = router;
