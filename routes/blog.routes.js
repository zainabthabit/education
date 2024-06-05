const express = require("express");

const router = express.Router();

const {
  getAllBlog,
  deleteBlog,
  updateBlog,
  createBlog,
} = require("../controllers/blog.controllers");
const { authenticateToken } = require("../middleWares/auth");
const { fileUpload } = require("../middleWares/FileUpload");
router.get("/", getAllBlog);

router.post("/", authenticateToken, fileUpload.single("imgOrVid"), createBlog);

router.delete("/:id", deleteBlog);

router.put("/:id", updateBlog);

module.exports = router;
