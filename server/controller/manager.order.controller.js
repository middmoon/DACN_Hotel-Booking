"use strict";

const { OK } = require("../core/success.response");
const ManagerOrderService = require("../services/manager.order.service");

class ManagerOrderController {
  getAllOrder = async (req, res, next) => {
    new OK({
      message: "get all order OK",
      metadata: await ManagerOrderService.getAllOrder(req._id),
    }).send(res);
  };

  getPreOrder = async (req, res, next) => {
    new OK({
      message: "get all order OK",
      metadata: await ManagerOrderService.getOrderWithStatus(
        req._id,
        "PRE_ORDER"
      ),
    }).send(res);
  };

  getOnOrder = async (req, res, next) => {
    new OK({
      message: "get all order OK",
      metadata: await ManagerOrderService.getOrderWithStatus(
        req._id,
        "ON_ORDER"
      ),
    }).send(res);
  };

  getDoneOrder = async (req, res, next) => {
    new OK({
      message: "get all order OK",
      metadata: await ManagerOrderService.getOrderWithStatus(req._id, "DONE"),
    }).send(res);
  };

  getCancelOrder = async (req, res, next) => {
    new OK({
      message: "get all order OK",
      metadata: await ManagerOrderService.getOrderWithStatus(req._id, "CANCEL"),
    }).send(res);
  };

  updateOrder = async (req, res, next) => {
    new OK({
      message: "update order OK",
      metadata: await ManagerOrderService.updateOrder(
        req._id,
        req.params.orderId,
        req.body
      ),
    }).send(res);
  };
}

module.exports = new ManagerOrderController();
