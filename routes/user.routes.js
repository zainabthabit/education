const express = require("express");
const router = express.Router();

const { signUp, login } = require("../controllers/user.controllers");
const { authenticateUser } = require("../middleWares/auth.js");
const { fileUpload } = require("../middleWares/FileUpload.js");

router.post("/login", authenticateUser, login);

router.post("/signUp", fileUpload.single("img"), signUp);

module.exports = router;
