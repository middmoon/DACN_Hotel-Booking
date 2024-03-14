"use strict";

const { BadRequestError, NotFoundError } = require("../core/error.response");
const { OK } = require("../core/success.response");
const { getUserInfoById } = require("../services/user.service");

class UserController {
  getUserInfo = async (req, res, next) => {
    if (req.user._id != req.params._id) {
      throw new NotFoundError(
        "There are some things wrong with your informations"
      );
    }

    new OK({
      message: "get user info OK",
      metadata: (await getUserInfoById(req.params._id)).metadata,
    }).send(res);
  };
}

module.exports = new UserController();
