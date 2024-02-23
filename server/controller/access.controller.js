"use strict";

const { CREATED, OK } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message: "Registered OK",
      metadata: await AccessService.signUp(req.body),
      options: {
        limit: 10,
      },
    }).send(res);
  };

  login = async (req, res, next) => {
    const loginResponse = await AccessService.login(req.body);
    const { accessToken, refreshToken, user } = loginResponse.metadata;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    new OK({
      message: "Login OK",
      metadata: {
        user,
        accessToken,
      },
    }).send(res);
  };

  refesh = async (req, res, next) => {
    const refreshToken = await AccessService.refesh(req.cookies.refreshToken);
    new OK({
      message: "handlerRefreshToken OK",
      metadata: {
        refreshToken,
      },
    }).send(res);
  };
}

module.exports = new AccessController();
