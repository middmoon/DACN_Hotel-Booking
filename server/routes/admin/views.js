"use strict";

const express = require("express");
const {
  verifyToken,
  verifyAdminAuth,
} = require("../../middleware/auth.middleware");

const router = express.Router();

//#region GET - views
router.use(verifyToken, verifyAdminAuth);

router.get("/", (req, res) => {
  res.render("admin");
});

router.get("/hotel", (req, res) => {
  res.render("hotel");
});

router.get("/user", (req, res) => {
  res.render("user");
});

router.get("/utility", (req, res) => {
  res.render("utility");
});

router.get("/post", (req, res) => {
  res.render("post");
});

router.get("/review", (req, res) => {
  res.render("review");
});

router.get("/discount", (req, res) => {
  res.render("discount");
});
//#endregion

module.exports = router;
