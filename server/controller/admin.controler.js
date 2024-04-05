"use strict";

const { BadRequestError, NotFoundError } = require("../core/error.response");
const { OK } = require("../core/success.response");
const { getUserInfoById } = require("../services/user.service");

const db = require("../models");

class AdminController {
  getModel = (req, res, next) => {
    const path = req.path;
    req.model = path.charAt(1).toUpperCase() + path.slice(2);
    next();
  };

  getModelCols = async (req, res, next) => {
    const model = db[req.model];
    req.cols = Object.keys(await model.describe());
    next();
  };

  getManageView = (req, res, next) => {
    const metadata = {
      model: req.model,
      cols: req.cols,
    };

    res.render("manage-overview", { metadata });
  };
}

module.exports = new AdminController();
