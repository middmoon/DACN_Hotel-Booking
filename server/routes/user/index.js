"use strict";

const express = require("express");
const asyncHandler = require("express-async-handler");
const UserController = require("../../controller/user.controller");

const router = express.Router();

router.post("/user/register", asyncHandler(UserController.d));
router.post("/user/login", asyncHandler(AccessController.login));

router.use(verifyToken);
// use authen midleware

router.post("/user/refesh", asyncHandler(AccessController.refresh));
router.delete("/user/logout", asyncHandler(AccessController.logout));

module.exports = router;
