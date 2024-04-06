"use strict";

const express = require("express");
const router = express.Router();

router.use("/v1/api", require("./address"));

router.use("/v1/api", require("./hotel"));

router.use("/v1/api", require("./access"));

router.use("/v1/api", require("./user"));

router.use("/test/v1/api", require("./test"));

router.use("/admin", require("./admin"));

router.get("/", (req, res) => {
  res.send("hello home");
});

module.exports = router;
