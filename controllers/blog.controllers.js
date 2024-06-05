const Blog = require("../models/Blog");

const path = require("path");
const getFirebaseImgUrl = require("../storeService");
exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.createBlog = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const newBlogData = {
      ...req.body,
      date: Date.now(),
      user: userId,
    };

    if (req.file) {
      const imgOrVidUrl = await getFirebaseImgUrl(
        "blog-imgOrVid",
        req.file.path,
        req.file.originalname
      );
      newBlogData.imgOrVid = imgOrVidUrl;
    }
    const newBlog = await Blog.create(newBlogData);
    res.status(201).json(newBlog);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBlog = await Blog.findByIdAndDelete(id);
    if (!deleteBlog) {
      return res.status(404).json({ error: "blog not found" });
    }
    res.status(204).end();
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBlog) {
      return res.status(404).json({ error: "blog not found" });
    }
    res.status(200).json(updateBlog);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
  router.put("/:userId", authenticateToken, updateUser);
  const imageFile = req.file;
  const imageUrl = "images/" + imageFile.filename;

  const newUserData = {
    ...req.body,
    image: imageUrl,
  };
};
