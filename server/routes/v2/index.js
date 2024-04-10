const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("API V2");
  })
  .use("/user", require("./user"))
  .use("/hotel", require("./hotel"))
  .use("/province", require("./address"))
  .use("/admin", require("./admin"));

module.exports = router;
