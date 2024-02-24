"use strict";

require("dotenv").config;
const jwt = require("jsonwebtoken");

class KeyService {
  static async createTokenPair(foundUser) {
    const accessToken = jwt.sign(
      {
        _id: foundUser._id,
        role: foundUser.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    const refreshToken = jwt.sign(
      {
        _id: foundUser._id,
        role: foundUser.role,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "30d" }
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  static async refesh(refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      const { _id, role } = decoded;
      const user = { _id, role };
      const tokenPair = await this.createTokenPair(user);
      return tokenPair;
    } catch (error) {
      return error;
    }
  }
}

module.exports = KeyService;
