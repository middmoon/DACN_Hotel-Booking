require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const db = require("./models");
const app = express();

// middleware
app.use(cors());

app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// router
app.use("", require("./src/routes"));

// // init db
// db.sequelize.sync();

module.exports = app;
