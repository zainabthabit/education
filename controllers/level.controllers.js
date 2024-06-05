const Level = require("../models/Level");

exports.getAllLevel= async (req, res) => {
  try {
    const Level = await Level.find();
    res.status(200).json(blogs);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

exports.createLevel = async (req, res) => {
  try {
    const newLevel = await Level.create(req.body);
    res.status(201).json(newLevel);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.deleteLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLevel = await Level.findByIdAndDelete(id);
    if (!deleteLevel) {
      return res.status(404).json({ error: "level not found" });
    }
    res.status(204).end();
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.updateLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const updateLevel = await Level.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateLevel) {
      return res.status(404).json({ error: "level not found" });
    }
    res.status(200).json(updateLevel);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
