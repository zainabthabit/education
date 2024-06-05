const express = require("express");

const router = express.Router();

const {
  getAllLevel,
  deleteLevel,
  updateLevel,
  createLevel,
} = require("../controllers/level.controllers");

router.get("/", getAllLevel);

router.post("/", createLevel);

router.delete("/:id", deleteLevel);

router.put("/:id", updateLevel);

module.exports = router;
