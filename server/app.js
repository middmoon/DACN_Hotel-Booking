"use strict";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("node:path/win32");
const app = express();

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
