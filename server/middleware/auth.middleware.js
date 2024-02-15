require("dotenv").config();
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { AuthFailureError } = require("../core/error.response");

const HEADER = {
  API_KEY: "x-api-key",
  CLIENT_ID: "x-client-id",
  AUTHORIZATION: "authorization",
  REFRESHTOKEN: "x-rtoken-id",
};

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.headers[HEADER.AUTHORIZATION];
  if (!token) throw new AuthFailureError("Invalid request");

  jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, decoded) => {
    if (err) throw new AuthFailureError("Invalid token");
    req.user = decoded;
    next();
  });
});

// const verifyTokenAndAdminAuth = asyncHandler(async (req, res, next) => {

//   verifyToken(req, res, ()=>{
//     if (req.user.id == req.params.id || req.user.role == "ADMIN") {

//     }
//   })
//   const token = req.headers[HEADER.AUTHORIZATION];
//   if (!token) throw new AuthFailureError("Invalid request");

// });

module.exports = {
  verifyToken,
};
