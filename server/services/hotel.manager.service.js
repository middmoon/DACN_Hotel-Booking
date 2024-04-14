"use strict";
require("dotenv").config();

const db = require("../models");
const { BadRequestError, NotFoundError } = require("../core/error.response");
const AccessService = require("./access.service");
const { getInfoData } = require("../utils");

// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.API_SECRET,
// });

const cloudinary = require("../config/cloudinary.config");
const multer = require("../config/multer.config");

class HotelManagerService {
  static async registerHotel(payload, role = "HOTEL_MANAGER") {
    // sign up manager
    const newManager = await AccessService.signUp(
      { email: payload.email, password: payload.password },
      role
    );

    // console.log(newManager);

    // register hotel

    if (!newManager) {
      throw new BadRequestError("Error: Can not register hotel");
    }

    const newHotel = await db.Hotel.create({
      id_manager: newManager.user._id,
      hotel_name: payload.hotel_name,
      house_number: payload.house_number,
      street_name: payload.street_name,
      code_ward: payload.ward_code,
      status: "ACTIVE",
    });

    if (newHotel) {
      return {
        manager: { ...newManager.user },
        hotel: getInfoData({
          fields: ["_id", "status"],
          object: newHotel,
        }),
      };
    }
  }

  static async getInfo(hotelId) {
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
        {
          model: db.HotelImage,
          attributes: ["_id", "hote_image"],
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

  static async uploadImages(hotelId, files) {
    const uploadedImages = [];

    const uploadPromises = files.map((file, index) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file.path, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          // Create the hotel image in the database
          console.log(`result--- ${result}`);

          db.HotelImage.create({
            id_hotel: hotelId,
            hote_image: result.url,
          })
            .then((uploadedImage) => {
              console.log(`result URL--- ${result.url}`);

              uploadedImages.push(result.url);
              resolve(uploadedImage);
            })
            .catch((err) => reject(err));
        });
      });
    });

    await Promise.all(uploadPromises);

    return uploadedImages;
  }

  static async addRoom(hotelId, payload) {
    const addedRoom = await db.Room.create({
      id_hotel: payload.id_hotel,
      room_number: payload.room_number,
      is_ordered: false,
      price: payload.price,
      type_name: payload.type_name,
    });

    if (!addedRoom) {
      throw new BadRequestError("ERR: Can not add room for your hotel");
    }

    if (addedRoom) {
      return {
        room: addedRoom,
      };
    }
  }

  static async getAllOrder() {
    const orderList = await db.Order.findAll({});

    if (!orderList) {
      throw new BadRequestError("ERR: Can not get your orders");
    }

    if (orderList) {
      return {
        orders: orderList,
      };
    }
  }

  static async getOrder(order_status) {
    const orderList = await db.Order.findAll({
      where: {
        status: order_status,
      },
    });

    if (!orderList) {
      throw new BadRequestError("ERR: Can not get your orders");
    }

    if (orderList) {
      return {
        orders: orderList,
      };
    }
  }

  static async updateHotelInfo() {}

  static async deleteHotelInfo() {}

  static async updateOrder() {}
}

module.exports = HotelManagerService;
