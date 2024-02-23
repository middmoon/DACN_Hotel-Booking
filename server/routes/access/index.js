"use strict";

const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const AccessController = require("../../controller/access.controller");

router.post("/user/register", asyncHandler(AccessController.signUp));
router.post("/user/login", asyncHandler(AccessController.login));
router.post("/user/refesh", asyncHandler(AccessController.refesh));

router.delete("/user/logout", (req, res) => {
  res.send("logout page");
});

router.get("/user/logout", (req, res) => {
  res.send("logout page");
});

router.get("/user/login", (req, res) => {
  res.send("login page");
});

router.get("/user/register", (req, res) => {
  res.send("register page");
});

module.exports = router;
