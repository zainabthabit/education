const express = require("express");
// import multer to get an access
const multer = require("multer");
const app = express();

// Configure Multer
const storage = multer.diskStorage({
  destination: "uploads", // Set the destination folder for uploaded files
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Define the file name
  },
});
