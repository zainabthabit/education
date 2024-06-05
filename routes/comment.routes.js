const express = require("express");

const router = express.Router();

const {
  deleteComment,
  updateComment,
  createComment,
} = require("../controllers/comments.controllers");

router.post("/", createComment);

router.delete("/:id", deleteComment);

router.put("/:id", updateComment);

module.exports = router;
