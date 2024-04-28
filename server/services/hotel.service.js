"use strict";
require("dotenv").config();

const db = require("../models");
const { NotFoundError } = require("../core/error.response");

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
