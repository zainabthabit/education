const express = require("express");

const router = express.Router();

const {
  getAllSubject,
  deleteSubject,
  updateSubject,
  createSubject,
} = require("../controllers/subject.controllers");

router.get("/", getAllSubject);

router.post("/", createSubject);

router.delete("/:id", deleteSubject);

router.put("/:id", updateSubject);

module.exports = router;
