"use strict";

require("dotenv").config();
const db = require("../models");
const { BadRequestError, AuthFailureError } = require("../core/error.response");
const { getInfoData } = require("../utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");

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

  static login = async ({ option, password }) => {
    let foundUser;

    emailValidator.validate(option)
      ? (foundUser = await User.findOne({ where: { email: option } }))
      : (foundUser = await User.findOne({ where: { user_name: option } }));

    const validPassword = await bcrypt.compare(password, foundUser.password);

    if (!foundUser || !validPassword) {
      throw new BadRequestError("Error: Username or Password do not match");
    }

    if (foundUser && validPassword) {
      // create token pair //
      const accessToken = jwt.sign(
        {
          _id: foundUser._id,
          // user_name: foundUser.user_name,
          // email: foundUser.email,
          role: foundUser.role,
        },
        process.env.ACCES_TOKEN_SECRET,
        { expiresIn: "30m" }
      );

      return {
        metadata: {
          user: getInfoData({ fields: ["_id", "role"], object: foundUser }),
          accessToken: accessToken,
        },
      };
    }
    return {
      metadata: null,
    };
  };

  static logout = async ({ email, password }) => {};
}

module.exports = AccessService;
