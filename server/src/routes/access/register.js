const express = require("express");
const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
  res.send("register page");
});

module.exports = registerRouter;
