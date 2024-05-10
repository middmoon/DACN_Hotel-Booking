"use strict";

const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const MnagerOrderController = require("../../controller/manager.order.controller");

router
  .get("/", asyncHandler(MnagerOrderController.getAllOrder))
  .get("detail/:orderId", asyncHandler(MnagerOrderController.getDetailOrder))
  .get("/pre-order", asyncHandler(MnagerOrderController.getPreOrder))
  .get("/on-order", asyncHandler(MnagerOrderController.getOnOrder))
  .get("/done", asyncHandler(MnagerOrderController.getDoneOrder))
  .get("/cancel", asyncHandler(MnagerOrderController.getCancelOrder))
  .patch(
    "/:orderId/add-room",
    asyncHandler(MnagerOrderController.addRoomToOrder)
  )
  .patch("/update/:orderId", asyncHandler(MnagerOrderController.updateOrder));

module.exports = router;
