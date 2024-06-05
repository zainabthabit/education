const express = require("express");

const router = express.Router();

const {
  createVideo,
  deleteVideo,
} = require("../controllers/video.controllers");

router.post("/", createVideo);

router.delete("/:id", deleteVideo);

module.exports = router;
