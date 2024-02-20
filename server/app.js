"use strict";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("node:path/win32");
const app = express();
const db = require("./models");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// static field
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("", require("./routes"));

// check connect db

db.sequelize
  .authenticate()
  .then(() => {
    const { host, port, database } = db.sequelize.config;
    console.log(`Connection established successfully.`);
    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
    console.log(`Database: ${database}`);
  })
  .then(() => {
    console.log("Connection closed successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    // stack: error.stack,
    message: error.message || "Internal Error",
  });
});

module.exports = app;
