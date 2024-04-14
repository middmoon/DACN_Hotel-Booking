"use strict";
require("dotenv").config();

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const AccessService = require("./access.service");
const { getInfoData } = require("../utils");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});

class HotelService {
  static async getHotelInfo(hotelId) {
    const foundHotel = await db.Hotel.findByPk(hotelId, {
      include: [
        {
          model: db.Ward,
          attributes: ["code", "full_name"],
          include: [
            {
              model: db.District,
              attributes: ["code", "full_name"],
              include: [
                {
                  model: db.Province,
                  attributes: ["code", "full_name"],
                },
              ],
            },
          ],
        },
      ],
      // attributes: { exclude: ["code_ward"] },
    });

    if (!foundHotel) {
      throw new NotFoundError("Error: Can not find the Hotel");
    }

    if (foundHotel) {
      return {
        hotel: foundHotel,
      };
    }
  }
}

module.exports = HotelService;
