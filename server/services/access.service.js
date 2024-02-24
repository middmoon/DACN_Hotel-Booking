"use strict";

require("dotenv").config();
const db = require("../models");
const { BadRequestError, AuthFailureError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const KeyService = require("./key.service");

const User = db.User;

class AccessService {
  static signUp = async ({ email, password }) => {
    const foundUser = await User.findOne({ where: { email: email } });

    if (foundUser) {
      throw new BadRequestError("Error: Account already registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email: email,
      password: hashPassword,
    });

    if (newUser) {
      return {
        metadata: {
          user: getInfoData({ fields: ["_id", "email", "role"], object: newUser }),
        },
      };
    }
    return {
      metadata: null,
    };
  };

  static login = async ({ option, password, res }) => {
    let foundUser;

    emailValidator.validate(option)
      ? (foundUser = await User.findOne({ where: { email: option } }))
      : (foundUser = await User.findOne({ where: { user_name: option } }));

    if (!foundUser) {
      throw new BadRequestError("Error: Username or Password do not match");
    }

    const validPassword = await bcrypt.compare(password, foundUser.password);

    if (!validPassword) {
      throw new BadRequestError("Error: Username or Password do not match");
    }

    if (foundUser && validPassword) {
      // create token pair //
      const tokenPair = await KeyService.createTokenPair(foundUser);

      return {
        metadata: {
          user: getInfoData({ fields: ["_id", "role"], object: foundUser }),
          accessToken: tokenPair.accessToken,
          refreshToken: tokenPair.refreshToken,
        },
      };
    }
    return {
      metadata: null,
      res,
    };
  };

  static refesh = async (refreshToken) => {
    if (!refreshToken) {
      throw new BadRequestError("Error: You are not authenticated");
    }

    return refreshToken;
  };

  static logout = async ({ email, password }) => {};
}

module.exports = AccessService;
