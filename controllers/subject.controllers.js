const Subject = require("../models/Subject");

exports.getAllSubject= async (req, res) => {
    try {
      const Subject = await Subject.find();
      res.status(200).json(blogs);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  };
exports.createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.deleteSubject = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteSubject = await Subject.findByIdAndDelete(id);
      if (!deleteSubject) {
        return res.status(404).json({ error: "subject not found" });
      }
      res.status(204).end();
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  };
  exports.updateSubject = async (req, res) => {
    try {
      const { id } = req.params;
      const updateSubject = await Subject.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateSubject) {
        return res.status(404).json({ error: "subject not found" });
      }
      res.status(200).json(updateSubject);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  };
  
