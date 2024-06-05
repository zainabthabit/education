const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  try {
    const newComments = await Comment.create(req.body);
    res.status(201).json(newComments);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteComment = await Comment.findByIdAndDelete(id);
    if (!deleteComment) {
      return res.status(404).json({ error: "blog not found" });
    }
    res.status(204).end();
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const updateComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateComment) {
      return res.status(404).json({ error: "comment not found" });
    }
    res.status(200).json(updateComment);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
