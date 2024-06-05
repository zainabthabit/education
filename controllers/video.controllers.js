const Video = require("../models/Video");

exports.createVideo = async (req, res) => {
  try {
    const newVideos = await Video.create(req.body);
    res.status(201).json(newVideos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
exports.deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideo = await Video.findByIdAndDelete(id);
    if (!deleteVideo) {
      return res.status(404).json({ error: "video not found" });
    }
    res.status(204).end();
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
