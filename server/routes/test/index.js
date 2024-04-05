"use strict";

const express = require("express");
const _TestController = require("../../controller/_test.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("test API");
});

router.get("/hotel/:hotelId", _TestController.test_GetDetailHotel);

module.exports = router;
